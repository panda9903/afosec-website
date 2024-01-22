"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuRadioGroupDemo({
  setDepartment,
}: {
  setDepartment: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [position, setPosition] = React.useState("");

  function changeValue(value: string) {
    setPosition(value);
    setDepartment(value);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-black w-28">
          {position === "" ? "Department" : position}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-16">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={changeValue}>
          <DropdownMenuRadioItem value="AIDS">AI&DS</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Civil">Civil</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="CSE">CSE</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ECE">ECE</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="EIE">EIE</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="EEE">EEE</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="IT">IT</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Mech">Mech</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="MBA">MBA</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="MCA">MCA</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
