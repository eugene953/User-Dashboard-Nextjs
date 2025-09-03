import UsersClient from "./users-client";
import { fetchUsers } from "@/lib/api";

export const revalidate = 3600; 

export default async function UsersPage() {
  const users = await fetchUsers();
  return (
    <main className="min-h-screen p-6 sm:p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-bold">All Users</h1>
        <p className="text-slate-600 mt-2">Search by name or email. Click a user to view details.</p>
        <UsersClient initialUsers={users} />
      </div>
    </main>
  );
}
