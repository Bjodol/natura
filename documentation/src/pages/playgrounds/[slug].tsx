import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Playground } from "../../components/Playground";

const Stories = {
  buttons: '<button class="btn primary">Button</button>',
  colors: '<div class="h-12 w-12 bg-primary"/>',
  controls: '<label>Label<input type="text" class="control"/></label>',
  shapes: '<div class="h-12 w-12 leaf" />',
  links: '<a class="link">Link</a>',
  typography: '<p class="title">Title</p>',
};

const Playgrounds: FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const initialValue = Stories[slug as string] ?? Stories.buttons;

  return (
    <>
      <Head>
        <title>Playground - Natura design system</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">Playground</h1>
      <Playground initialValue={initialValue} key={slug as string} />
      <h2 className="h2">Playgrounds</h2>
      <ul>
        {Object.entries(Stories).map(([key, value]) => (
          <li key={key}>
            <Link href={`/playgrounds/${key}`}>
              <a className="link w-fit primary">{key}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Playgrounds;
