import Link from "next/link";
import Web3Form from "./web3form";

export default function HomePage() {
  const email = "mccartney.beausl@gmail.com";

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

  const section_item_style = "space-y-3";


  return (
    <div className="space-y-5 p-4">
      <section>
        <h1 className="pb-3 text-xl font-semibold text-neutral-800 hover:underline">
          <Link href={`mailto:${email}`}>{email}</Link>
        </h1>

        <div className={`${section_item_style}`}>
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
        <ul className={`${section_item_style}`}>
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
      <section>
        <h2 className=" pb-3 text-xl font-semibold text-neutral-800">
          Get in touch
        </h2>
        <Web3Form />
      </section>
    </div>
  );
}
