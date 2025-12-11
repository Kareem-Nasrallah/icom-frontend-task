import LoginForm from "@/components/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Card className="login-form-box">
      <CardHeader className="m-auto text-center gap-0">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent className="mt-8">
        <LoginForm />
      </CardContent>
      <CardFooter className="mt-6 text-sm">
        <Link
          className="text-center w-fit m-auto text-accent-foreground/90 hover:text-primary"
          href="/register"
        >
          Or Register a new account
        </Link>
      </CardFooter>
    </Card>
  );
};

export default page;
