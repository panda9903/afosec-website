import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <section id="sponsors">
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">Sponsors</h2>
      <Image
        src="/favicon.ico"
        alt="Picture of the author"
        height={400}
        width={400}
        className="mx-auto mt-4 mb-4 "
      />
    </section>
  );
};

export default Sponsors;
