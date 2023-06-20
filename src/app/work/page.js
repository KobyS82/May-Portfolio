import Image from "next/image";
import Navbar from "../components/navbar.js";
import Wanderlust from "../images/wanderlust3.png";
import Character from "../images/character.png";
import Jate from "../images/jatePic.png";
import Pong from "../images/pong-remake.png";
import Platformer from "../images/platformer.png";
import {
  AiFillGithub,
  AiOutlineSelect,
  AiOutlinePaperClip
} from "react-icons/ai";

export default function Work() {
  return (
    <section id="#work">
      <Navbar />
      <div className="min-h-screen w-full flex-col items-center text-center p-6 md:px-24 pt-4 bg-slate-900">
        <h2 className="text-3xl md:p-3">My Work</h2>
        {/* grid grid-cols-3 */}
        <div className="flex justify-evenly flex-wrap w-full">
          {/* Wanderlust */}
          <div className="bg-slate-900 w-[500px] m-2 p-2 border-2 rounded-lg shadow-xl shadow-black border-black">
            <Image
              className="p-3"
              src={Wanderlust}
              alt="Wanderlust website screenshot"
            />
            <h2 className="text-xl font-bold">Wanderlust</h2>
            <p className="text-slate-300">Travel Blog that allows users to keep track of their trips and see other users trips. It also allows you to keep a daily log while on vacation and upload images.</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a href="https://github.com/TMortara/Travel-Blog" target="_blank">
                <AiFillGithub className="hover:text-pink-400" />
              </a>
              <a href="https://quiet-everglades-33653.herokuapp.com/" target="_blank">
                <AiOutlineSelect className="hover:text-pink-400" />
              </a>
            </div>
          </div>
          {/* Character Generator */}
          <div className="bg-slate-900 w-[500px] m-2 p-2 border-2 rounded-lg shadow-xl shadow-black border-black">
            <Image
              className="p-3"
              src={Character}
              alt="Character Generator website screenshot"
            />
            <h2 className="text-xl font-bold">Character Generator</h2>
            <p className="text-slate-300">Step into a world of infinite possibilities with our Dungeons and Dragons character generator! Create your very own character hero using this character generator. Be able to determine your stats such as strength, dexterity, intelligence and many more. Find out what class and race your character will become.</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a href="https://github.com/KobyS82/character-generator" target="_blank">
                <AiFillGithub className="hover:text-pink-400" />
              </a>
              <a href="https://character-generator-tawny.vercel.app/" target="_blank">
                <AiOutlineSelect className="hover:text-pink-400" />
              </a>
            </div>
          </div>
          {/* Pong */}
          <div className="bg-slate-900 w-[500px] m-2 p-2 border-2 rounded-lg shadow-xl shadow-black border-black">
            <Image
              className="p-3"
              src={Pong}
              alt="Pong game screenshot"
            />
            <h2 className="text-xl font-bold">Pong Recreation</h2>
            <p className="text-slate-300">A simple recreation of the classic game Pong inside of Godot (GDScript)</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a href="https://github.com/KobyS82/Pong-Remake" target="_blank">
                <AiFillGithub className="hover:text-pink-400" />
              </a>
              <a href="https://the-kobes.itch.io/pong-recreation" target="_blank">
                <AiOutlineSelect className="hover:text-pink-400" />
              </a>
            </div>
          </div>
          {/* Platformer */}
          <div className="bg-slate-900 w-[500px] m-2 p-2 border-2 rounded-lg shadow-xl shadow-black border-black">
            <Image
              className="p-3"
              src={Platformer}
              alt="Platformer game screenshot"
            />
            <h2 className="text-xl font-bold">Platformer</h2>
            <p className="text-slate-300">My start in learning platformer physics, state machines, and animation creation in Godot.</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a href="https://github.com/KobyS82/Platformer" target="_blank">
                <AiFillGithub className="hover:text-pink-400" />
              </a>
            </div>
          </div>
          {/* Jate */}
          <div className="bg-slate-900 w-[500px] m-2 p-2 border-2 rounded-lg shadow-xl shadow-black border-black">
            <Image
              className="p-3"
              src={Jate}
              alt="Jate website screenshot"
            />
            <h2 className="text-xl font-bold">Text Editor</h2>
            <p className="text-slate-300">This site serves as a text editor that persists on reload and can be installed to use offline.</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a href="https://github.com/KobyS82/Text-Editor" target="_blank">
                <AiFillGithub className="hover:text-pink-400" />
              </a>
              <a href="https://text-editor-kobys.herokuapp.com/" target="_blank">
                <AiOutlineSelect className="hover:text-pink-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
