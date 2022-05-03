import Container from "./Container";
import Link from "next/link";
import styles from "../styles/Header.module.css";
export default function Header() {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/about-me", label: "Acerca de Mí" },
    { href: "/portfolio", label: "Portafolio" },
    // { href: "/blog", label: "Blog" },
    //    { href: "/contact", label: "Contacto" },
  ];
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles["header-content"]}>
          {links.map((i) => (
            <Link key={i.label} href={i.href}>
              <a>
                <span>{i.label}</span>
              </a>
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
