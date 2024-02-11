// LocateUsButton.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LocateUsButton() {
  return (
    <div className="mx-auto p-8">
      <Button
        asChild
        className="px-10 bg-[#FFFFFF] text-black hover:bg-[#EA8814]"
      >
        <Link
          href="https://maps.app.goo.gl/AdbMzj3PVDABnzxa8?g_st=ic"
          target="_blank"
        >
          <span className="text-lg">Locate Us</span>
        </Link>
      </Button>
    </div>
  );
}

export default LocateUsButton;
