"use client"
import React, { useState, useEffect } from 'react';
import { trpc } from '../_trpc/client';
import { serverClient } from '../_trpc/serverClient';

export default function UserList({
    initialUsers
}: {
    initialUsers: Awaited<ReturnType<(typeof serverClient)['getUsers']>>
}) {
    const getUsers = trpc.getUsers.useQuery(undefined, {
        initialData: initialUsers,
    });
    const addUser = trpc.addUser.useMutation({
        onSettled: () => {
            getUsers.refetch();
        }
    });

    const [fullName, setFullName] = useState('');

    useEffect(() => {
        async function getData() {
            const usersResponse = await fetch('/api/trpc/getUsers');
            const users = await usersResponse.json();
        }
        getData();
    });

    return (
        <div>
            <div className="text-white my-5 text-3xl">
                {getUsers?.data?.map((user) => {
                    console.log('[+] user: ', user);
                    return (
                    <div key={user.id} className="flex gap-3 items-center">
                        <input
                            id={`check-${user.id}`}
                            type='checkbox'
                            checked={!!user.phone}
                            style={{ zoom: 1.5}}
                        />
                        <label
                            htmlFor={`check-${user.id}`}
                            className="text-black"
                        >
                            {user.fullName}
                        </label>
                    </div>
                )})}
            </div>
            <label
                htmlFor="fullName"
                className="text-black"
            >
                Users
            </label>
            <input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="flex-grow text-black bg-white rounded-md border-gray-300 shadow-sm"
            />
            <button 
                onClick={async () => {
                    if (fullName.length) {
                        addUser.mutate(fullName);
                        setFullName('');
                    }
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
                Add User
            </button>
        </div>
    )
}