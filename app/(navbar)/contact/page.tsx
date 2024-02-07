import NavBar from "app/components/(NavBar)/NavBar"
import Footer from "app/components/(Footer)/Footer"

// use sizes to set the image size in responsive screen
// https://nextjs.org/docs/pages/api-reference/components/image?sizes#sizes

export default function Home() {
  return (
    <div className="bg-[#131313] text-primary-foreground font-sans">
      <NavBar />

      <div className="p-8">
        <p className="text-4xl">Contact Us</p>
        <div className="flex flex-col md:flex-row justify-around mt-4">
        <div>
        <p className="my-4 text-2xl">Student Coordinators</p>
        <p className="text-xl my-4">Civil</p>
        <p>Shaik Afreen: 9494116606. Email : naginashaik008@gmail.com </p> 
        <p>Magupalli Harish: 8374808392. Email : harishmagupalli@gmail.com</p>

        <p className="text-xl my-4">ECE</p>
        <p>Mohith Inampudi: 7386727747. Email : inampudimohith@gmail.com </p> 
        <p>Dhanush Reddy: 8555805700. Email : dhanushreddykusam@gmai.com </p>

        <p className="text-xl my-4">EEE</p>
        <p>K.Sivakumar: 7569447379. Email : sivakumarkavuluri@gmail.com</p> 
        <p>Ganesh: 7382382228. Email : ganeshnarige2003@gmail.com</p>

        <p className="text-xl my-4">IT</p>
        <p>N.Mahasvi: 7337061349</p> 
        <p>K.Saketh : 9989784432</p>

        <p className="text-xl my-4">Mech</p>
        <p>P GOPI HARSHA: 9949203610. Email : harshapolagani2004@gmail.com</p> 
        <p>B CHAITANYA: 9441903349 Email : birudugadda.chaitanya.s@gmail.com</p>

        <p className="text-xl my-4">EIE</p>
        <p>B. Siva ganesh: 9704596970. Email : Sivaganesh.bommakani@gmail.com</p> 
        <p>Y .sushma: 7993597220. Email : sushmachowdaryyarra44@gmail.com</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>
        </div>
        <div>
        <p className="my-4 text-2xl">Faculty Coordinators</p>
        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>

        <p className="text-xl my-4">CSE</p>
        <p>Blah: 1234567890</p> 
        <p>Blah: 1234567890</p>
        </div>
        </div>
        
      </div>
    <Footer />
    </div>
  );
}
