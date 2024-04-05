import { serverClient } from './_trpc/serverClient';

import UserList from "./components/UserList";

export default async function Home() {
    const users = await serverClient.getUsers();
    return (
        <main className=" mx-auto mt-5">
            <div className="container max-w-3xl">
                <UserList initialUsers={users} />
            </div>
        </main>
    );
}