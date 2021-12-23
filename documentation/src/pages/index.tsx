import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-base-main text-base-main-contrast border-b border-base-active">
        <nav>
          <ul>
            <li>
              <Link href="/buttons">
                <a className="link">Buttons</a>
              </Link>
              <Link href="/links">
                <a className="link">Links</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-base-main text-base-main-contrast h-screen">
        <h1>Natura - Raw and clean</h1>
      </main>

      <footer></footer>
    </div>
  );
}
