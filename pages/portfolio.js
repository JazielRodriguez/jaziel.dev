import Head from 'next/head'
import Header from "../components/Header";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Container from "../components/Container";
import styles from "../styles/Portfolio.module.css";
import wordle from "../public/images/wordle.png";
import photoGallery from "../public/images/photo-gallery.png";
import yourHotels from "../public/images/your-hotels.png";
import yourShop from "../public/images/fake-shop.png";
import ProjectCard from "../components/ProjectCard";
export default function Portfolio() {
  const projects = [
    {
      title: "Your Hotels",
      img: yourHotels,
      link: "https://your-hotels.herokuapp.com/",
    },
    {
      title: "Wordle Clone",
      img: wordle,
      link: "https://precious-sawine-8437a4.netlify.app/",
    },
    {
      title: "Photo Gallery",
      img: photoGallery,
      link: "https://photo-gallery-jaziel.netlify.app/",
    },
    {
      title: "Your Shop",
      img: yourShop,
      link: "https://your-shop-jaz.netlify.app/",
    },
  ];
  return (
    <>
      <Head>
        <title>Jaziel Rodriguez | Portfolio</title>
        <meta
          name="description"
          content="Jaziel Rodriguez, Desarrollador FrontEnd con React.Js"
        />
      </Head>
      <Header />
      <Description portfolio />
      <Container>
        <div className={styles.portfolio}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
