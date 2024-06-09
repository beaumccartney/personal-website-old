"use client";

import { useFormState } from "react-dom";
import submitForm from "./submitForm";

export default function Web3Form() {
  const [result, formAction] = useFormState(submitForm, null);

  return (
    <>
      <form action={formAction}>
        <input placeholder="Name" type="text" name="name" required />
        <input placeholder="Email" type="email" name="email" required />
        <textarea placeholder="Message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <span>{result?.message}</span>
    </>
  );
}

