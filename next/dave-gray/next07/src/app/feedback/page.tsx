"use client";

import { ElementRef, FormEvent, useRef } from "react";

const Feedback = () => {
  const nameRef = useRef<ElementRef<"input">>(null);
  const emailRef = useRef<ElementRef<"input">>(null);
  const messageRef = useRef<ElementRef<"textarea">>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const savedData = await res.json();

    console.log(savedData);
  };

  return (
    <div className="flex justify-center mt-52">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-10 border p-10 rounded-md min-w-[400px]"
      >
        <h2 className="text-2xl font-bold self-center">Feedback form</h2>

        <input
          type="text"
          name="name"
          ref={nameRef}
          placeholder="name"
          className="border rounded-md border-black p-2"
        />

        <input
          type="email"
          name="email"
          ref={emailRef}
          placeholder="email"
          className="border rounded-md border-black p-2"
        />

        <textarea
          name="message"
          ref={messageRef}
          placeholder="message"
          className="border rounded-md border-black p-2"
        ></textarea>

        <input
          type="submit"
          className="border rounded-md border-black p-2 hover:bg-slate-200 hover:cursor-pointer"
        />
      </form>
    </div>
  );
};
export default Feedback;
