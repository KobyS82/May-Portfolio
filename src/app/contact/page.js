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
        <div>
          <h2>Thanks for stopping by! Send me an email at <a href = "mailto: ksillitowork@gmail.com" className="text-blue-600">ksillitowork@gmail.com</a> or use the form below.</h2>
        </div>
        <Form />
      </div>
    </section>
  );
}
