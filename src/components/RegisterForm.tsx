"use client";

import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  RegisterSchemaType,
} from "@/lib/validations/register.schema";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const registerUser = async (data: any) => {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Something went wrong");

    return res.json();
  };

  const { mutate, isPending, data } = useMutation({
    mutationFn: registerUser,
    onSuccess: (result) => {
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUsers = [...storedUsers, result];

      localStorage.setItem("user", JSON.stringify(result));
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      router.push("/");
      return toast.success("Account created successfully!");
    },
    onError: () => toast.error("Something went wrong!"),
  });

  const onSubmit = (data: any) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        id="email"
        name="Email"
        type="email"
        register={register}
        watch={watch}
        error={errors.email}
      />
      <InputField
        id="password"
        name="Password"
        type="password"
        register={register}
        watch={watch}
        error={errors.password}
      />
      <InputField
        id="confirmPassword"
        name="Confirm Password"
        type="password"
        register={register}
        watch={watch}
        error={errors.confirmPassword}
      />
      <Button
        className="w-full text-lg"
        disabled={isPending ? true : false}
        size="lg"
        type="submit"
      >
        {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
