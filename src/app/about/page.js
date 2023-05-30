import Image from "next/image";
import Profile from "../images/Profile.jpg";
import Texas from "../images/texas.png";
import Navbar from "../components/navbar.js";

export default function About() {
  return (
    <section id="#about">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center text-center p-24 pt-4 bg-slate-900">
        <h2 className="text-3xl">About Me</h2>
        <Image
          className="rounded-full my-10 border-2 shadow-orange-500 shadow-lg"
          src={Profile}
          alt="profile picture"
          width={300}
          height={300}
        />
        <p className="w-72 py-4 text-base justify-center text-neutral-400">
          Hey there! I'm Koby, a coder with a passion for blending work and
          play. When I'm not busy crafting stunning designs, you can usually
          find me exploring my diverse range of hobbies.
        </p>

        <div className="bg-slate-600 p-5 rounded-xl">
          <Image
            className=""
            src={Texas}
            alt="University of Texas picture"
            width={300}
            height={300}
          />
          <p className="w-72 pt-2 text-white">
            I graduated from the University of Texas at Austin with a
            certificate in Flex Coding that was taught using Web Development.
          </p>
        </div>

        <div>
          <h2 className="text-3xl">Hobbies</h2>
          <p className="w-72 py-4 text-base justify-center text-neutral-400">
            I have a wide range of hobbies that I enjoy doing in my free time. I
            love to play video games, watch anime, and play board games. I also
            enjoy being outside to enjoy nature. I love to go frisbee golfing,
            hiking, and relaxing at the lake.
          </p>
        </div>
      </div>
    </section>
  );
}
