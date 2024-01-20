import NavBar from "app/components/(NavBar)/NavBar";
import Footer from "app/components/(Footer)/Footer";
import FAQ from "app/(navbar)/faq/FAQ";

// use sizes to set the image size in responsive screen
// https://nextjs.org/docs/pages/api-reference/components/image?sizes#sizes

export default function Home() {
  return (
    <div className="bg-[#131313] text-primary-foreground font-sans">
      <NavBar />

      <div className="p-8">
        <p className="text-4xl mb-4">
          Frequently Asked <span className=" text-[#EA8814]">Questions</span>
        </p>
      </div>
      <div className="">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
