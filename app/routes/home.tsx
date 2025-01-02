import { useFetcher, data } from "react-router";
import type { Route } from "./+types/home";
import { sendEmailWithGmail } from "~/lib/gmail.server";

export default function Home(_: Route.ComponentProps) {
  let fetcher = useFetcher();

  return (
    <fetcher.Form method="post">
      <p>
        <input type="text" name="name" />
      </p>

      <p>
        <input type="email" name="email" />
      </p>

      <p>
        <input type="text" name="message" />
      </p>

      <button type="submit">Send</button>
    </fetcher.Form>
  );
}

export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();

  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const message = String(formData.get("message"));

  const errors = {} as any;

  if (name.length < 2) {
    errors.name =
      "Name should be at least 2 characters.";
  }

  if (!email.includes("@")) {
    errors.email = "Invalid email address.";
  }

  if (message.length < 12) {
    errors.password =
      "Message should be at least 12 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return data({ errors }, { status: 400 });
  }

  await sendEmailWithGmail({email: email, from: name ,content: message})
}