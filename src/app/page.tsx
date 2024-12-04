import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome to BillCraft.
            <strong className="font-extrabold sm:block">
              Simplify Your Invoicing Journey.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Say goodbye to billing hassles! With BillCraft, create, manage, and
            send invoices effortlessly. Perfect for freelancers, businesses, and
            enterprises—streamline your finances with ease. Start invoicing like
            a pro today!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link
                className="block w-full rounded border px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/dashboard"
              >
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
