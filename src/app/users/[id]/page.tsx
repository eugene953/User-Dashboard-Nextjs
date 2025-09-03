import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchUser } from "@/lib/api";
import MotionSection from "@/components/MotionSection";

type UserDetailsProps = {
  params: { id: string };
};

export default async function UserDetails({ params }: UserDetailsProps) {
  const user = await fetchUser(params.id);

  return (
    <main className="min-h-screen p-6 sm:p-10 bg-slate-50">
      <div className="mx-auto max-w-5xl">
        {/* Back button with icon */}
        <Link
          href="/users"
          className="inline-flex  items-center gap-2 text-base sm:text-lg font-medium text-slate-700 hover:text-slate-900 transition"
        >
          <ArrowLeft className="h-5 text-blue-600 w-5 sm:h-6 sm:w-6" />
          
        <span className=" text-blue-600 ">Back to Users</span>
        </Link>

        <MotionSection className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{user.name}</h1>
          <p className="text-lg sm:text-xl text-slate-600">{user.email}</p>
          <p className="text-slate-600">@{user.username}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 text-base sm:text-lg">
            <div>
              <div className="font-semibold text-slate-800">Phone</div>
              <div className="text-slate-700">{user.phone}</div>
            </div>
            <div>
              <div className="font-semibold text-slate-800">Website</div>
              <div className="text-slate-700">{user.website}</div>
            </div>
            <div>
              <div className="font-semibold text-slate-800">Company</div>
              <div className="text-slate-700">{user.company?.name}</div>
            </div>
            <div className="sm:col-span-2">
              <div className="font-semibold text-slate-800">Address</div>
              <div className="text-slate-700 leading-relaxed">
                {user.address?.suite}, {user.address?.street}, {user.address?.city} — {user.address?.zipcode}
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </main>
  );
}
