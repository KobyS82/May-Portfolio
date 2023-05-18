"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mayzkkqk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="px-24 w-screen">
      <div className="flex flex-col form-group">
        <label htmlFor="Name">Name</label>
        <input id="name" type="name" name="name" className="text-black px-1" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="flex flex-col form-group">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" className="text-black px-1" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="text-black px-1" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="flex flex-col form-group">
        <button type="submit" disabled={state.submitting} className="hover:font-bold">
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
