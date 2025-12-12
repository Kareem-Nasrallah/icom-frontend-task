"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "../ui/button";

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

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/users", label: "Users" },
  ];

  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className={`p-2 fixed top-4  z-50 bg-main/80 text-white rounded-md transition-all duration-300 ${
          isAuthPage ? "-left-full" : "left-4"
        }`}
      >
        <Menu size={20} className="cursor-pointer" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-56 bg-white dark:bg-neutral-900 shadow-xl z-50 p-5 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="mb-8 p-2 text-black dark:text-white cursor-pointer"
        >
          <X className="h-6 w-6" />
        </button>

        <nav className="flex flex-col gap-4">
          {menuLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-black dark:text-white hover:text-main dark:hover:text-main"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 pt-5 border-t border-neutral-300 dark:border-neutral-700">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-3 text-black dark:text-white text-lg cursor-pointer hover:text-main dark:hover:text-main"
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
      </aside>
    </>
  );
}
