import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        <p>
          Hello, I&apos;m Beau! I&apos;m a software engineer interested in
          compilers, game engine technology, and robotics.
        </p>
        <br />
        <p>
          I&apos;m currently searching for my next opportunity. If you&apos;re
          interested in working with me, please shoot me an email!
        </p>
        <br />
        <p>
          In the meantime, I&apos;m working on an education platform with{" "}
          <Link href="">Elements Education</Link> to improve the way we learn,
          and{" "}
          <Link href="https://crp-docs.vercel.app/" target="_blank">
            create ros project
          </Link>{" "}
          to improve the way we build robotics software.
        </p>
      </main>
    </>
  );
}
