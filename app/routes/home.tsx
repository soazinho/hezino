import type { Route } from "./+types/home";
import { Pyramid } from "lucide-react"
import { LoginForm } from "~/components/login-form"

import website from "./website.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "hezino" },
    { name: "description", content: "hezino web development" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-12 p-6 md:p-10">
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
      <div className="flex bg-muted justify-center items-center">
        <img
          src={website}
          alt="Image"
        />
      </div>
    </div>
  )
}
