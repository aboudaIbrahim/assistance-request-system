"use client"; // 👈 Must be the first line

import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RoleType } from "../../api/auth.type";

const AuthGuard = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: RoleType;
}) => {
  const user = useAppSelector((state) => state.authReducer.user);
  console.log("🚀 ~ user:", user);
  const router = useRouter();

  useEffect(() => {
    if (!user || (user && user.role !== role)) {
      router.push("/");
    }
  }, [user, role, router]);

  if (!user) return null;

  return <>{children}</>;
};

export default AuthGuard;
