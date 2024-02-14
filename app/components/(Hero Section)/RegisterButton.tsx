"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RegisterButton() {
  return (
    <div className="mx-auto">
      <Button
        asChild
        className="px-8 bg-[#EA8814] text-white relative bottom-24"
      >
        <Link href="/register.php">
          <span className="text-lg">Register</span>
        </Link>
      </Button>
    </div>
  );
}

export default RegisterButton;
