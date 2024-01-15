import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./about/page";

// use sizes to set the image size in responsive screen
// https://nextjs.org/docs/pages/api-reference/components/image?sizes#sizes

export default function Home() {
  return (
    <div className="bg-[#000000f7] text-primary-foreground font-sans">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}
