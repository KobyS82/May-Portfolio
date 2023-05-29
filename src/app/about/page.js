import Image from "next/image";
import Texas from "../images/texas.png";
import Navbar from "../components/navbar.js";

export default function About() {
  return (
    <section id="#about" className="">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center p-24 bg-slate-900">
        <h2 className="text-3xl justify-items-start">About me!</h2>
        <p className="w-72 pb-10 text-neutral-400">
          I am a full stack web developer with a passion for making webpages and
          learning new things.
        </p>
        <div className="bg-slate-600 p-5 rounded-xl">
          <Image
            className=""
            src={Texas}
            alt="University of Texas picture"
            width={300}
            height={300}
          />
          <p className="w-72 text-white">
            I graduated from the University of Texas at Austin with a
            certificate in Full Stack Web Development.
          </p>
        </div>
      </div>
    </section>
  );
}
