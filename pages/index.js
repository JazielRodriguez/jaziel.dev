import Head from "next/head";
import Header from "../components/Header";
import Me from "../components/Me";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Jaziel Rodriguez</title>
        <meta
          name="description"
          content="Jaziel Rodriguez, Desarrollador FrontEnd con React.Js"
        />
      </Head>
      <Header />
      <Me />
      <Footer />
    </>
  );
}

