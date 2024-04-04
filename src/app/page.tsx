import { serverClient } from './_trpc/serverClient';

import UserList from "./components/UserList";

export default async function Home() {
    const users = await serverClient.getUsers();
    return (
        <main className="max-w-3xl mx-auto mt-5">
            <UserList initialUsers={users} />
        </main>
    );
}