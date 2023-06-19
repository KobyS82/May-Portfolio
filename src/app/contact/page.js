import Image from "next/image";
import Profile from "../images/profile.png";
import Texas from "../images/texas.png";
import Navbar from "../components/navbar.js";
import Form from "../components/form.js";

export default function Contact() {
  return (
    <section id="#contact">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center text-center p-24 pt-4 bg-slate-900">
        <h2 className="text-3xl">Contact Me</h2>
        <Form />
      </div>
    </section>
  );
}
