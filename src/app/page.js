/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Profile from "./images/Profile.jpg";
import Lumiel from "./images/lumiel.jpg";
import Texas from "./images/texas.png";
import Form from './components/form.js'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFileText,
  FiMapPin,
} from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-900">
      <section id="#top" className="justify-between">
        <div className="mb-12 flex-column text-center text-3xl w-full items-center ">
          <div className="font-mono">Hello! My name is</div>
          <div className="font-anton font-bold rounded-xl w-3/4 p-2 justify-center bg-slate-600">Koby Sillito</div>
          <Image
            className="rounded-full mt-10"
            src={Lumiel}
            alt="profile picture"
            width={300}
            height={300}
          />
        </div>
        {/* Socials */}
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/KobyS82" target="_blank">
              <AiFillGithub className="hover:text-pink-400"/>
            </a>
            <a
              href="https://www.linkedin.com/in/koby-sillito/"
              target="_blank"
            >
              <AiFillLinkedin className="hover:text-pink-400"/>
            </a>
            <a
              href="https://docs.google.com/document/d/17N3A6zOqL7IJ6HCXbcePu9OvhL8HGvxpBMXVfIZhKWc/edit?usp=sharing"
              target="_blank"
            >
              <AiFillFileText className="hover:text-pink-400"/>
            </a>
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
      <section id="#form">
        <Form />
      </section>
    </main>
  );
}
