import type { NextPage } from "next"
import { signIn, signOut, useSession } from "next-auth/react"
import Head from "next/head"
import { trpc } from "../utils/trpc"

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from Aladin" }]);
  const session = trpc.useQuery(["auth.getSession"]);
  const auth = trpc.useQuery(["auth.getSecretMessage"]);

  return (
    <>
      <Head>
        <title>Aladin</title>
        <meta name="description" content="An E-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {session.data ? <p>The user is sign in</p> : <p>Loading session..</p>}
        </div>
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {auth.data ? <p>{auth.data}</p> : <p>Loading auth..</p>}
        </div>
        <p className="text-2xl text-gray-700">This stack uses:</p>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            name="NextJS"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <TechnologyCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
          <TechnologyCard
            name="tRPC"
            description="End-to-end typesafe APIs made easy"
            documentation="https://trpc.io/"
          />
          <TechnologyCard
            name="Next-Auth"
            description="Authentication for Next.js"
            documentation="https://next-auth.js.org/"
          />
          <TechnologyCard
            name="Prisma"
            description="Build data-driven JavaScript & TypeScript apps in less time"
            documentation="https://www.prisma.io/docs/"
          />
        </div>
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
        <Authentication />
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Authentication = () => {
  const session = useSession();
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-2xl text-gray-700">
        {session.status === "authenticated" ? (
          <button type="button" onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <button type="button" onClick={() => signIn()}>
            Sign in
          </button>
        )}
      </p>
    </div>
  );
};

const TechnologyCard = ({ name, description, documentation }: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer">
        Documentation
      </a>
    </section>
  );
};
