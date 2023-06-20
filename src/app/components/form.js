"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mayzkkqk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="px-24 w-screen md:px-48 lg:px-80">
      <div className="flex flex-col form-group m-2">
        <label htmlFor="Name">Name</label>
        <input id="name" type="name" name="name" className="text-black px-1" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="flex flex-col form-group m-2">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" className="text-black px-1" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col form-group m-2">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="text-black px-1" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="form-group items-center ">
        <button type="submit" disabled={state.submitting} className="m-2 px-2 py-1 w-20 bg-slate-600 rounded-lg hover:font-bold after:">
          Submit
        </button>
      </div>
    </form>
  );
};
function App() {
  return <ContactForm />;
}
export default App;
