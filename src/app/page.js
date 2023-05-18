/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import lumiel from "./images/lumiel.jpg";
import texas from "./images/texas.png";
import Form from './components/form.js'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-900">
      <section id="#top" className="justify-between">
        <div className="mb-32 flex-column text-center text-3xl w-full items-center ">
          <div className="font-mono">Hello! My name is</div>
          <div className="font-anton font-bold rounded-xl w-3/4 p-2 justify-center bg-slate-600">Koby Sillito</div>
          <Image
            className="rounded-full mt-10"
            src={lumiel}
            alt="profile picture"
            width={300}
            height={300}
          />
        </div>
      </section>
      <section id="#about" className="">
        <div className="mb-32 grid text-center text-base justify-items-center">
          <h2 className="text-3xl justify-items-start">About me!</h2>
          <p className="w-72 pb-10 text-neutral-400">
            I am a full stack web developer with a passion for making webpages and learning new things.
          </p>
          <div className="bg-slate-600 p-5 rounded-xl">
            <Image
              className=""
              src={texas}
              alt="University of Texas picture"
              width={300}
              height={300}
            />
            <p className="w-72 text-white">
              I graduated from the University of Texas at Austin with a certificate in Full Stack Web Development.
            </p>
          </div>
        </div>
      </section>
      <section id="#work">
        <h2>work!</h2>
      </section>
      <section id="#contact">
        <h2>contact!</h2>
        <h4>Thanks for stopping by my portfolio! If you're interested in working together, feel free to contact me through the form 
          below or connect with me on Gmail at <a href={`mailto:${"KSillitoWork@gmail.com"}`}>KSillitoWork@gmail.com</a>.</h4>
      </section>
      <section>
        <Form />
      </section>
    </main>
  );
}
