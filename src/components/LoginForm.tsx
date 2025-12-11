"use client";

import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "@/lib/validations/login.schema";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const user = await res.json();

      localStorage.setItem("user", JSON.stringify(user));

      router.push("/");
    } catch (err: any) {
      setServerError("Email or password is incorrect.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      {serverError && (
        <p className="text-red-600 text-center">{serverError}</p>
      )}

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

      <Button className="w-full text-lg" size="lg" type="submit" disabled={loading}>
        {loading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" /> Logging in...
          </div>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
