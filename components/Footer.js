import Container from "./Container";
import styles from '../styles/Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
      <p>Diseñado y desarrollado por Jaziel Rodriguez 2022 - &copy;</p>
      </Container>
    </footer>
  )
}