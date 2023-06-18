import Image from "next/image";
import Profile from "../images/Profile.jpg";
import Texas from "../images/texas.png";
import Navbar from "../components/navbar.js";

export default function Work() {
  return (
    <section id="#work">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center text-center p-24 pt-4 bg-slate-900">
        <h2 className="text-3xl">My Work</h2>
      </div>
    </section>
  );
}
