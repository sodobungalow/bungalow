"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FaqRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/guest/faq/"); }, [router]);
  return null;
}
