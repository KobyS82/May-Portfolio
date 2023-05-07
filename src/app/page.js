/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import lumiel from "./images/lumiel.jpg";

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
      <section id="#about">
        <div className="mb-32 grid text-center text-base text-neutral-400 lg:mb-0">
          <p className="w-72">
            I am a full stack web developer with a passion for making pages look
            asthetically pleasing.
          </p>
        </div>
      </section>
      <section id="#work">
        <h2>work!</h2>
      </section>
      <section id="#contact">
        <h2>contact!</h2>
        <h4>Thanks for stopping by my portfolio! If you're interested in working together, feel free to contact me through the form below or connect with me on Gmail at <a href={`mailto:${"KobySWork@gmail.com"}`}>KobySWork@gmail.com</a>.</h4>
        <form>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
