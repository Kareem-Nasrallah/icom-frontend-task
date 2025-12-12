import RegisterForm from "@/components/auth/RegisterForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Page = () => {
  return (
    <Card className="register-form-box">
      <CardHeader className="m-auto text-center gap-0">
        <CardTitle className="text-2xl">Be one of Our Community</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent className="mt-8">
        <RegisterForm />
      </CardContent>
      <CardFooter className="mt-6 text-sm">
        <Link
          className="text-center w-fit m-auto text-accent-foreground/90 hover:text-primary"
          href="/login"
        >
          Already have an account?
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Page;
