"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RegisterButton() {
  return (
    <Button asChild className="mx-auto px-8 bg-[#EA8814] text-white">
      <Link href="/register">
        <span className="text-lg">Register</span>
      </Link>
    </Button>
  );
}

export default RegisterButton;
