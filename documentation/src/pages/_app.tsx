import Head from "next/head";
import "@bjodol/natura/styles.css";
import { Sidebar } from "../components/Sidebar";

export const routes = [
  {
    title: "Style",
    elements: ["/typography"],
  },
  {
    title: "Components",
    elements: ["/buttons", "/links", "/hex", "/tiles", "/controls"],
  },
  {
    title: "Layouts",
    elements: ["/hex-grid"],
  },
];

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Natura UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <main className="sm:ml-[288px] p-12">
          <Component {...pageProps} />
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default App;
