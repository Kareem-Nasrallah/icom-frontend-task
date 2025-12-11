"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.replace("/login"); // رجّعه للوجين
    } else {
      setLoading(false);
    }
  }, [router]);

  // أثناء الشيك – متعرضش الصفحة
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
