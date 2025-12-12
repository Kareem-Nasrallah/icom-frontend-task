"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function MenuWithTheme() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
    setOpen(false);
  };
  console.log(pathname)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`p-2 fixed top-4  z-50 bg-main/80 text-white rounded-md transition-all duration-300 ${pathname === "/login" || pathname === "/register" ? "-left-full" : "left-4"}`}
      >
        <Menu size={20} className="cursor-pointer" />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-56 bg-white dark:bg-neutral-900 shadow-xl z-50 p-5 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="mb-8 p-2 text-black dark:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-lg font-medium text-black dark:text-white hover:text-main"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/users"
            className="text-lg font-medium text-black dark:text-white hover:text-main"
            onClick={() => setOpen(false)}
          >
            Users
          </Link>
        </nav>

        <div className="mt-10 pt-5 border-t border-neutral-300 dark:border-neutral-700">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-3 text-black dark:text-white text-lg cursor-pointer hover:text-main"
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-6 w-6" /> Light Mode
              </>
            ) : (
              <>
                <Moon className="h-6 w-6" /> Dark Mode
              </>
            )}
          </button>
        </div>
        <Button
          onClick={handleLogout}
          className="w-full mt-[calc(100vh-310px)] block bg-red-800 hover:bg-red-700 text-white"
        >
          Logout
        </Button>
      </div>
    </>
  );
}
