import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { useForm, type SubmitHandler } from "react-hook-form"
import { sendEmailWithGmail } from "~/gmail/gmail.server"
import type { Route } from "../routes/+types/home"

type Inputs = {
  example: string
  exampleRequired: string
}

export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();
  const from = formData.get("email");
  const content = formData.get("content");

  const response = await sendEmailWithGmail({from, content});
}

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Let's build your web application.</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Contact us for any additional information!
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="name">Name</Label>
          </div>
          <Input id="name" type="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="someone@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="tel">Telephone</Label>
          </div>
          <Input id="tel" type="tel" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Input id="message" type="text" required />
        </div>
        <Button type="submit" className="w-full">
          Send
        </Button>
      </div>
    </form>
  )
}
