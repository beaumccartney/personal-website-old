import Link from "next/link";

export default function HomePage() {
  const email = "mccartney.beausl@gmail.com";

  return (
    <main className="flex min-h-screen flex-col gap-5">
      <header>
        <ul className="flex flex-row flex-wrap gap-10 text-lg">
          <li className="hover:underline">
            <Link href="https://github.com/BeauSLM" target="_blank">
              GitHub
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href="https://www.linkedin.com/in/beau-mccartney-247b0820a/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li className="order-last ml-auto hover:underline">
            <Link href="beaumccartney-resume.pdf" target="_blank">
              Resume
            </Link>
          </li>
        </ul>
      </header>
      <section>
        <h1 className="mb-3 text-xl font-semibold text-neutral-800 hover:underline">
          <Link href={`mailto:${email}`}>{email}</Link>
        </h1>

        <div className="flex flex-col gap-3">
          <p>
            Hello, I&apos;m Beau! I love learning about the world around me, and
            exploring it by building.
          </p>

          <p>
            I studied software engineering at the University of Calgary,
            completing my degree in May 2024. I specialize in compiler
            technology, game engine technology, and computer architecture.
          </p>

          <p>
            I&apos;m currently searching for my next opportunity. If you&apos;re
            interested in working with me, please reach out!
          </p>
        </div>
      </section>
      <section>
        <h2 className=" mb-3 text-xl font-semibold text-neutral-800">
          Projects
        </h2>
        <ul className="flex flex-col gap-3">
          <li className="rounded-md border border-neutral-200 py-4 pl-3 pr-10 hover:bg-neutral-200">
            <Link href="https://crp-docs.vercel.app/" target="_blank">
              <h3 className="mb-2 text-lg font-semibold text-neutral-800">
                create-ros-project
              </h3>
              <p className="text-neutral-500">
                A simple and fast CLI tool for managing ROS (Robotics Operating
                System) projects.
              </p>
            </Link>
          </li>
          <li className="rounded-md border border-neutral-200 py-4 pl-3 pr-10 hover:bg-neutral-200">
            <Link href="https://github.com/beauslm/golf" target="_blank">
              <h3 className="mb-2 text-lg font-semibold text-neutral-800">
                golf - [gol]ang [f]ragment
              </h3>
              <p className="text-neutral-500">
                Compile a subset of golang to mips-32 assembly. Handwritten
                tokenizer, recursive descent parser, semantic checker, and
                assembly generator.
              </p>
            </Link>
          </li>
          <li className="rounded-md border border-neutral-200 px-2 py-4 hover:bg-neutral-200">
            <Link href="https://github.com/SamuelGarm/CPSC-585" target="_blank">
              <h3 className="mb-2 text-lg font-semibold text-neutral-800">
                maximus overdrive
              </h3>
              <p className="text-neutral-500">
                A 3d roman chariot racing game built in OpenGL and C++.
              </p>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
