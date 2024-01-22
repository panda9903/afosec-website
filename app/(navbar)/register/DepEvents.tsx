"use client";
import React from "react";
import { DropdownMenuRadioGroupDemo } from "./Department";
import { DropdownMenuCheckboxes } from "./Events";

const Events = () => {
  const [deparment, setDepartment] = React.useState("");

  return (
    <div>
      <p className="">Select the events you want to participate in</p>
      <p className=" text-gray-600 mb-2">
        Select 2 technical and 2 non technical events only
      </p>
      <div className="flex justify-around">
        <DropdownMenuRadioGroupDemo setDepartment={setDepartment} />
        <DropdownMenuCheckboxes deparment={deparment} />
      </div>
    </div>
  );
};

export default Events;
