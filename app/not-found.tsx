"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1C202B] text-white">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-[#88E515]">404</h1>
        <p className="text-gray-400 max-w-md">
          Page you were looking for doesn't exist.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Link href="/">
            <Button className="bg-[#88E515] text-[#1C202B] hover:bg-[#6bc012] cursor-pointer">
              Home Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
