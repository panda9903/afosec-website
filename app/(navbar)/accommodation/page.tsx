import NavBar from "app/components/(NavBar)/NavBar"
import Footer from "app/components/(Footer)/Footer"

// use sizes to set the image size in responsive screen
// https://nextjs.org/docs/pages/api-reference/components/image?sizes#sizes

export default function Accommodation() {
  return (
    <div className="bg-[#131313] text-primary-foreground font-sans">
      <NavBar />
      <div>
        Accommodation must be requested during the registration. 
      </div>
    <Footer />
    </div>
  );
}
