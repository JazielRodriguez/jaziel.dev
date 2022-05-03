import Link from 'next/link'
import styles from "../styles/404.module.css";
export default function Custom404() {
  return (
    <div className={styles["page-not-found"]}>
      <h3>404</h3>
      <h1>Ohhh no...</h1>
      <p>Esta pagina no esta disponible</p>
      <Link href="/">
        <a>Regresar</a>
      </Link>
    </div>
  );
}
