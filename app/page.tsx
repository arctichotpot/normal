/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zKnHlB5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-bottom sm:w-full lg:order-last"
            height="310"
            src="https://images.pexels.com/photos/989936/pexels-photo-989936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Welcome to our email client
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Manage all your emails in one place. Securely and efficiently.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Link href="/login">
                  <Button>Get Start</Button>
                </Link>
                <Button variant="ghost">Learn More</Button>
              </form>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Start managing your emails today.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
