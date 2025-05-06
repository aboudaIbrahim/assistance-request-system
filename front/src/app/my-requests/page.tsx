"use client";
import AuthGuard from "@/features/auth/components/guards/AuthGuard";
import UserRequestCards from "@/features/support/components/UserRequests/UserRequests";
import React from "react";

export default function page() {
  return (
    <AuthGuard role="user">
      <UserRequestCards />
    </AuthGuard>
  );
}
