"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RoleType, User } from "../../api/auth.type";
import { decryptData } from "@/utils/storage.helpers";
import { rehydrateAuth } from "@/store/slices/auth";
import Loader from "@/components/Loader/Loader";

const AuthGuard = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: RoleType;
}) => {
  const user = useAppSelector((state) => state.authReducer.user);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      const authData = localStorage.getItem("authData");
      if (authData) {
        const { token, user }: { token: string; user: User } =
          decryptData(authData);
        dispatch(rehydrateAuth({ token, user }));
      }
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (!user) {
      setIsLoading(true);
      return;
    }

    if (user.role !== role) {
      router.push("/");
      return;
    }

    setIsLoading(false);
  }, [user, role, router]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthGuard;
