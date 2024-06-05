import Link from "next/link";

export default function HomePage() {
  const email = "mccartney.beausl@gmail.com";

  const toplinks: [string, string][] = [
    ["https://github.com/BeauSLM", "GitHub"],
    ["https://www.linkedin.com/in/beau-mccartney-247b0820a/", "LinkedIn"],
    ["beaumccartney-resume.pdf", "Resume"],
  ];

  const projects: [string, string, string][] = [
    [
      "https://crp-docs.vercel.app/",
      "create-ros-project",
      "A simple and fast CLI tool for managing ROS (Robotics Operating System) projects.",
    ],

    [
      "https://github.com/beauslm/golf",
      "golf - [gol]ang [f]ragment",
      "Compile a subset of golang to mips-32 assembly. Handwritten tokenizer, recursive descent parser, semantic checker, and assembly generator.",
    ],

    [
      "https://github.com/SamuelGarm/CPSC-585",
      "maximus overdrive",
      "A 3d roman chariot racing game built in OpenGL and C++.",
    ],
  ];

  return (
    <main className="flex min-h-screen flex-col gap-5">
      <header>
        <ul className="flex flex-row flex-wrap gap-10 text-lg">
          {toplinks.map(([link, str]) => (
            <li className="last:ml-auto hover:underline" key={str}>
              <Link href={link} target="_blank">
                {str}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <section>
        <h1 className="pb-3 text-xl font-semibold text-neutral-800 hover:underline">
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
        <h2 className=" pb-3 text-xl font-semibold text-neutral-800">
          Projects
        </h2>
        <ul className="flex flex-col gap-3">
          {projects.map(([link, name, desc]) => (
            <li
              className="rounded-md border border-neutral-200 py-4 pl-3 pr-10 hover:bg-neutral-200"
              key={name}
            >
              <Link href={link} target="_blank">
                <h3 className="pb-2 text-lg font-semibold text-neutral-800">
                  {name}
                </h3>
                <p className="text-neutral-500">{desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
