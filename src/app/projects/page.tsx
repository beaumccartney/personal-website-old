import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <ul>
        <li>
          <Link href="https://crp-docs.vercel.app/" target="_blank">
            create-ros-project
          </Link>
        </li>
        <li>
          <Link href="https://github.com/beauslm/golf" target="_blank">
            golf
          </Link>
        </li>
        <li>
          <Link href="https://github.com/SamuelGarm/CPSC-585" target="_blank">
            maximus overdrive
          </Link>
        </li>
      </ul>
    </>
  );
}
