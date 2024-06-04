import Link from "next/link";

export default function HomePage() {
  const email = "mccartney.beausl@gmail.com";

  return (
    <>
      <main className="min-h-screen py-10 flex flex-col gap-5">
        <header>
          <ul className="flex flex-row flex-wrap text-lg underline-offset-2">
            <li className="pr-10">
              <Link
                className="hover:underline"
                href="https://github.com/BeauSLM"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href="https://www.linkedin.com/in/beau-mccartney-247b0820a/"
              >
                LinkedIn
              </Link>
            </li>
            <li className="ml-auto">
              <Link
                className="hover:underline"
                href="beaumccartney-resume.pdf"
                target="_blank"
              >
                Resume
              </Link>
            </li>
          </ul>
        </header>
        <section>
          <h1 className="mb-2 underline">
            <Link href={`mailto:${email}`}>{email}</Link>
          </h1>

          <div className="flex flex-col gap-2">
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
          <h2 className="mb-2 underline">Projects</h2>
          <ul className="flex flex-col gap-2">
            <li className="rounded-md border border-neutral-200 hover:bg-neutral-200 px-2 py-4">
              <Link href="https://crp-docs.vercel.app/">
                <h3>create-ros-project</h3>
                <p>
                  A simple and fast CLI tool for managing ROS (Robotics
                  Operating System) projects.
                </p>
              </Link>
            </li>
            <li className="rounded-md border border-neutral-200 hover:bg-neutral-200 px-2 py-4">
              <Link href="https://github.com/beauslm/golf">
                <h3>golf</h3>
                <p>
                  Compile a subset of golang to mips-32 assembly. Handwritten
                  tokenizer, recursive descent parser, semantic checker, and
                  assembly generator.
                </p>
              </Link>
            </li>
            <li className="rounded-md border border-neutral-200 hover:bg-neutral-200 px-2 py-4">
              <Link href="https://github.com/SamuelGarm/CPSC-585">
                <h3>maximus overdrive</h3>
                <p>A 3d roman chariot racing game built in OpenGL and C++.</p>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
