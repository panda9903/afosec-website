import React from "react";
import Link from "next/link";
import Image from "next/image";

const DownArrow = () => {
  return (
    <div className="mx-auto">
      <Link href="#about">
        <Image
          src="/arrow.svg"
          alt="Arrow"
          height={20}
          width={20}
          className="mx-auto size-8 animate-bounce mt-6 rotate-180 w"
        />
      </Link>
    </div>
  );
};

export default DownArrow;
