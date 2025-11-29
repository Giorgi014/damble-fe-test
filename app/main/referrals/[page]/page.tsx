"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

const validPages = [
  "profile",
  "settings",
  "verification",
  "transactions",
  "bet-history",
  "login-history",
  "responsible-gaming"
];

export default function DynamicPage() {
  const params = useParams();
  const page = params.page as string;

  if (!validPages.includes(page)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1C202B] text-white p-8">
      <h1 className="text-2xl font-bold capitalize">
        {page.replace(/-/g, " ")}
      </h1>
    </div>
  );
}