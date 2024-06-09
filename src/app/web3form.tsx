"use client";

import { useFormState } from "react-dom";
import submitForm from "./submitForm";

export default function Web3Form() {
  const [result, formAction] = useFormState(submitForm, null);

  // TODO: factor out border styles from the project cards to these too
  // ...@apply?
  return (
    <>
      <form action={formAction}>
        <div className="section-items">
          <div className="border border-neutral-200 placeholder:text-neutral-500">
            <input placeholder="Name" type="text" name="name" required />
          </div>
          <div className="border border-neutral-200 placeholder:text-neutral-500">
            <input placeholder="Email" type="email" name="email" required />
          </div>
          <div className="border border-neutral-200 placeholder:text-neutral-500">
            <textarea placeholder="Message" name="message" required></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <span>{result?.message}</span>
    </>
  );
}

