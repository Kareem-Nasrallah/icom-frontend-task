"use client";

import React, { useState } from "react";
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
import AuthGuard from "@/components/AuthGuard";
import AnimationTitle from "@/components/AnimationTitle";

const page = () => {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState<"name" | "email" | "company">(
    "name"
  );

  const { data, isLoading, isError, error } = useUsers();

  let filteredUsers = data;

  switch (searchBy) {
    case "name":
      filteredUsers = data?.filter((user: any) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      break;
    case "email":
      filteredUsers = data?.filter((user: any) =>
        user.email.toLowerCase().includes(search.toLowerCase())
      );
      break;
    case "company":
      filteredUsers = data?.filter((user: any) =>
        user.company.name.toLowerCase().includes(search.toLowerCase())
      );
      break;
  }

  return (
    <AuthGuard>
      <div
        className="max-w-7xl mx-auto p-6 sm:mx-10 "
        onClick={() =>
          console.log(
            "data: ",
            data,
            "isLoading: ",
            isLoading,
            "error: ",
            error
          )
        }
      >
        <AnimationTitle>
          <h1 className="text-3xl font-bold mb-4 text-main">Users List</h1>
        </AnimationTitle>
        {/* Search Input */}
        <div className="sticky top-5 bg-background z-10">
          <input
            type="text"
            placeholder={`Search by ${searchBy}...`}
            className="w-full p-3 rounded-md border mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            defaultValue={searchBy}
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
          {filteredUsers?.map((user: any) => (
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

export default page;
