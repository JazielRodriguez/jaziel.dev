import Image from "next/image";
import test from "../public/images/test.jpeg";
import Container from "./Container";
import styles from "../styles/Me.module.css";
export default function Me() {
  return (
    <Container>
      <div className={styles.me}>
          <Image src={test} alt="" objectFit="cover" height={300} width={300} />
        <div>
          <h1>Holaa, soy Jaziel.</h1>
          <p>
            Desarrollador JavaScript, amo el desarrollado, crear increibles
            experiencias en cada uno de mis trabajos, experiencias digitales
            increíbles
          </p>
          <p>Actualmente especializandome en Next.Js</p>
        </div>
      </div>
    </Container>
  );
}
