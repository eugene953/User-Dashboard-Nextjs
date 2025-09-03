"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
};

export default function UsersClient({ initialUsers }: { initialUsers: User[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  // Filter users based on query
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return initialUsers;
    return initialUsers.filter((u) =>
      [u.name, u.email].some((f) => f.toLowerCase().includes(q))
    );
  }, [initialUsers, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageItems = filtered.slice(start, end);

  return (
    <section className="mt-6">

<div className="flex flex-col sm:flex-row sm:justify-center items-center gap-3">
  <input
    type="search"
    value={query}
    onChange={(e) => {
      setQuery(e.target.value);
      setPage(1);
    }}
    placeholder="Search by name or email…"
    className="w-full sm:w-[600px] md:w-[700px] lg:w-[800px] rounded-3xl border border-slate-200 bg-white px-6 py-3 text-lg outline-none focus:ring-2 focus:ring-slate-300"
  />
  <div className="text-sm text-slate-500 mt-2 sm:mt-0">
    {filtered.length} result{filtered.length !== 1 ? "s" : ""}
  </div>
</div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false} mode="popLayout">
          {pageItems.map((u) => (
            <motion.li
              key={u.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <Link
                href={`/users/${u.id}`}
                className="block rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lg transition-shadow"
              >
                <div className="font-semibold text-lg">{u.name}</div>
                <div className="text-slate-600 text-sm">{u.email}</div>
                <div className="mt-2 text-xs text-slate-500">@{u.username}</div>
                <div className="text-xs text-slate-500">{u.website}</div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="rounded-xl border px-3 py-2 text-sm disabled:opacity-40"
        >
          Prev
        </button>
        <span className="text-sm text-slate-600">
          Page {currentPage} of {pageCount}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
          disabled={currentPage === pageCount}
          className="rounded-xl border px-3 py-2 text-sm disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </section>
  );
}
