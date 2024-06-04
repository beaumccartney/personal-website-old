import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        <p>
          Hello, I&apos;m Beau! I love learning about the world around me, and
          exploring it by building.
        </p>
        <br />
        <p>
          I studied software engineering at the University of Calgary,
          completing my degree in May 2024. I specialize in compiler technology,
          game engine technology, and computer architecture.
        </p>
        <br />
        <p>
          I&apos;m currently working on{" "}
          <Link href="https://crp-docs.vercel.app/" target="_blank">
            create ros project
          </Link>{" "}
          to improve the way we build software for robots.
        </p>
        <br />
        <p>
          I&apos;m currently searching for my next opportunity. If you&apos;re
          interested in working with me, please{" "}
          <Link href="/#contact">reach out</Link>!
        </p>
        <br />
        <p>
          Aside from my work life, I love to play music, read, learn about
          ancient history, run local video game tournaments, cook, and jog.
        </p>
      </main>
    </>
  );
}
