"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header3D from "@/components/Header3D";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 sm:p-10">
      
       <Header3D/>
      
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4}}
        className="mx-auto max-w-6xl mt-8 grid gap-6 text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-bold">Users Dashboard</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Explore users, search by name or email, and open a user to see their details.
        </p>
        <div>
          <Link
            href="/users"
            className="inline-block rounded-2xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Go to Users
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
