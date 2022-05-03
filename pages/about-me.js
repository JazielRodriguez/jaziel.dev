import Header from "../components/Header";
import Container from "../components/Container";
import Description from "../components/Description";
import Footer from "../components/Footer";
import TechnologiesList from "../components/TechnologiesList";
import styles from "../styles/AboutMe.module.css";
import { mdiTwitter, mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
export default function AboutMe() {
  return (
    <>
      <Header />
      <Description aboutMe />
      <Container>
        <div className={styles["digital-garden"]}>
          <h3>Mis hogares digitales</h3>
          <div>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JazielRodriguez"
            >
              <span>
                <Icon path={mdiGithub} size="2rem" />
              </span>
              <span>Github</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/jaziel_dev"
            >
              <span>
                <Icon path={mdiTwitter} size="2rem" />
              </span>
              <span>Twitter</span>{" "}
            </a>
          </div>
        </div>
        <div className={styles["my-things"]}>
          <h3>Que hago actualmente</h3>
          <ol>
            <li> - Estudiar acerca de estructuras de datos en programación</li>
            <li> - Conocer el ecosistema de MongoDB</li>
            <li> - Mejorando mi desarrollo Front-End con React.js y Next.js</li>
            <li> - Dando mis primeros pasos con Golang</li>
          </ol>
        </div>
      </Container>
      <TechnologiesList />
      <Footer />
    </>
  );
}
