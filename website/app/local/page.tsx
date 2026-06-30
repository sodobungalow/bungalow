"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LocalRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/guest/local/"); }, [router]);
  return null;
}
