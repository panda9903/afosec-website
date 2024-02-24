import NavBar from "app/components/(NavBar)/NavBar"
import Footer from "app/components/(Footer)/Footer"

export default function Home() {
  return (
    <div className="bg-[#131313] text-primary-foreground font-sans">
      <NavBar />

      <div className="p-8">
        <p className="text-4xl">Contact Us</p>
        <div className="flex flex-col md:flex-row justify-center mt-4">
        <div>
        <p className="my-4 text-2xl">Student Coordinators</p>

        <p className="text-xl my-4">Culturals</p>
        <p>Nandu : 9491453822</p>

        <p className="text-xl my-4">Civil</p>
        <p>Shaik Afreen: 9494116606</p>
        <p>Magupalli Harish: 8374808392</p>

        <p className="text-xl my-4">ECE</p>
        <p>Mohith Inampudi: 7386727747</p>
        <p>Dhanush Reddy: 8555805700</p>

        <p className="text-xl my-4">EEE</p>
        <p>K.Sivakumar: 7569447379</p>
        <p>Ganesh: 7382382228</p>

        <p className="text-xl my-4">IT</p>
        <p>N.Mahasvi: 7337061349</p>
        <p>K.Saketh : 9989784432</p>

        <p className="text-xl my-4">Mech</p>
        <p>P GOPI HARSHA: 9949203610</p>
        <p>B CHAITANYA: 9441903349 </p>

        <p className="text-xl my-4">EIE</p>
        <p>B. Siva ganesh: 9704596970</p>
        <p>Akshitha : 6301416197</p>

        <p className="text-xl my-4">CSE</p>
        <p>T. Pranavi : 9396441551</p>
        <p>V Subramaya Sastry: 8500826360</p>

        <p className="text-xl my-4">MBA</p>
        <p>S. Vamsi : 8977766611</p>
        <p>P. Sree Bhoomikka: 7075755188</p>

        <p className="text-xl my-4">MCA</p>
        <p>G. Rakesh: 6303989719</p>
        <p>K. SindhuPriya: 7075015677</p>

        <p className="text-xl my-4">AI & DS</p>
        <p>Zayeem : 7396518259</p>
        <p> Leela Priya : 9398060950</p>
        </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}
