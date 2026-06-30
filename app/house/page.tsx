"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HouseRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/guest/house/"); }, [router]);
  return null;
}
