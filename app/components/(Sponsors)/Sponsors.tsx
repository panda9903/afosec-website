import Leo from "@images/Leo.png";
import CareerBaba from "@images/career.jpg";
import Sahasra from "@images/sahasra.jpg";
import Image from "next/image";

const Sponsors = () => {
  return (
    <section id="sponsors" className="mb-10">
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">Sponsors</h2>
{/*<Image
        src="/favicon.ico"
        alt="Picture of the author"
        height={400}
        width={400}
        className="mx-auto mt-4 mb-4 "
  />*/}
  <h4 className="text-xl font-bold text-center mb-8">Platinum Sponsor</h4>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
        <div className="flex flex-col items-center">
          <Image
            src={CareerBaba}
            alt="Sponsor"
            height={200}
            width={200}
            className="mx-auto"
          />
        </div>
      </div>
      <h4 className="text-xl font-bold text-center">Silver Sponsor</h4>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col items-center">
          <Image
            src={Leo}
            alt="Sponsor"
            height={200}
            width={200}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={Sahasra}
            alt="Sponsor"
            height={200}
            width={200}
            className="mx-auto"
          />
        </div>
      </div>
  
    </section>
  );
};

export default Sponsors;
