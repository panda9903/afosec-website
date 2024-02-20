import Image from "next/image";


const Sponsors = () => {
  return (
    <section id="sponsors">
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">Sponsors</h2>
{/*<Image
        src="/favicon.ico"
        alt="Picture of the author"
        height={400}
        width={400}
        className="mx-auto mt-4 mb-4 "
  />*/}
  <h4 className="text-xl font-bold text-center mb-10">Title Sponsor</h4>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col items-center">
          <Image
            src="/"
            alt="Sponsor"
            height={200}
            width={200}
            className="mx-auto mt-4 mb-4 "
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src=""
            alt="Sponsor"
            height={200}
            width={200}
            className="mx-auto mt-4 mb-4 "
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src=""
            alt="Sponsor"
            height={200}
            width={200}
            className="mx-auto mt-4 mb-4 "
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
