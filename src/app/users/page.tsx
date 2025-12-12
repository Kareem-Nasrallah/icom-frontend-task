"use client";

import { useState } from "react";
import { useUsers } from "@/hooks/useUsers";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AuthGuard from "@/components/auth/AuthGuard";
import FadeSlideIn from "@/components/common/FadeSlideIn";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

const Page = () => {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState<"name" | "email" | "company">(
    "name"
  );

  const { data, isLoading, isError } = useUsers();

  // Filter users based on search text and searchBy option
  const filterUsers = (
    users: User[] = [],
    search: string,
    searchBy: string
  ) => {
    const key = searchBy === "company" ? "company.name" : searchBy;

    return users.filter((user) => {
      const value =
        key === "company.name" ? user.company.name : (user as any)[key];

      return value.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredUsers = filterUsers(data, search, searchBy);

  return (
    <AuthGuard>
      <div className="mx-auto p-6 sm:mx-10 ">
        <FadeSlideIn>
          <h1 className="text-3xl font-bold mb-4 text-main ms-8 sm:ms-0">
            Users List
          </h1>
        </FadeSlideIn>
        {/* Search Input */}
        <div className="sticky top-5 bg-background z-10 mx-5 sm:mx-0">
          <input
            type="text"
            placeholder={`Search by ${searchBy}...`}
            className="w-full p-3 rounded-md border mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            value={searchBy}
            onValueChange={(value: "name" | "email" | "company") =>
              setSearchBy(value)
            }
          >
            <SelectTrigger
              value={searchBy}
              className="w-fit absolute top-0 right-0 py-6! dark:bg-main/90! text-main/90! dark:text-primary/90!"
            >
              <span className="text-teal-950">Search by:</span>
              <SelectValue className="font-semibold!" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="company">Company</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Loading */}
        {isLoading && (
          <p className="w-fit m-auto text-primary/60 mt-20">
            <Loader2 className="h-8 w-8 animate-spin" />
          </p>
        )}

        {/* Error */}
        {isError && <p className="text-center text-red-600">Failed to load.</p>}

        {/* Users List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers?.map((user: User) => (
            <div
              key={user.id}
              className="border p-4 rounded-lg shadow-sm bg-card scale-95 hover:bg-blue-200 dark:hover:bg-blue-900 hover:scale-100 transition-all duration-200 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
              <p className="mt-1 text-sm">
                <span className="font-medium">Company: </span>
                {user.company.name}
              </p>
            </div>
          ))}
        </div>

        {/* No results */}
        {data && filteredUsers?.length === 0 && (
          <p className="text-center text-muted-foreground mt-6">
            No users found.
          </p>
        )}
      </div>
    </AuthGuard>
  );
};

export default Page;
