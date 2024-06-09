"use server";

import { env } from "~/env";

export default async function submitForm(
  prevState: unknown,
  payload: FormData,
) {
  "use server";

  payload.append("access_key", env.WEB3FORMS_ACCESS_KEY);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
    });

    const data: unknown = await response.json();
    return data;
  } catch (e) {
    throw new Error("Form submission failed");
  }
}
