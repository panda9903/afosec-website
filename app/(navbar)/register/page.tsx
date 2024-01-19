import NavBar from "app/components/(NavBar)/NavBar";
import Footer from "app/components/(Footer)/Footer";
import { ProfileForm } from "app/(navbar)/register/Form";

// use sizes to set the image size in responsive screen
// https://nextjs.org/docs/pages/api-reference/components/image?sizes#sizes

export default function Home() {
  return (
    <div className="bg-[#131313] text-primary-foreground font-sans">
      <NavBar />

      <div className="p-8 flex flex-col">
        <p className="text-4xl mb-8">Register</p>
        <div className=" items-center">
          <ProfileForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
