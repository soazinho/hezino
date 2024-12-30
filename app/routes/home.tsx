import type { Route } from "./+types/home";
import { Pyramid } from "lucide-react"
import { LoginForm } from "~/components/login-form"

import website from "./website.svg";
import { sendEmailWithGmail } from "~/gmail/gmail.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "hezino" },
    { name: "description", content: "hezino web development" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-12 p-6 md:px-24">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Pyramid className="size-4" />
            </div>
            hezino
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:h-screen overflow-hidden">
        <img
          src={website}
          className="bg-none m-16 w-3/4 sm:w-96 md:w-128 lg:w-256 object-contain"
          alt="Image"
        />
      </div>

      {actionData ? (
        <p>Your email has been sent succesfully!</p>
      ) : null}
    </div>
  )
}
