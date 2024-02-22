import NavBar from "./components/(NavBar)/NavBar";
import Hero from "./components/(Hero)/Hero";
import About from "./components/(About)/About";
import Events from "./components/(Events)/Events";
import Sponsors from "./components/(Sponsors)/Sponsors";
import Footer from "./components/(Footer)/Footer";
import SpotLight from "./components/(Spotlight)/Spotlight";

// use sizes to set the image size in responsive screen
// https://nextjs.org/docs/pages/api-reference/components/image?sizes#sizes

export default function Home() {
  return (
    <div className="bg-[#131313] text-primary-foreground font-sans">
      <NavBar />
      <Hero />
      <About />
      <Events />
      <SpotLight /> 
      <Sponsors />
      <Footer />
    </div>
  );
}
