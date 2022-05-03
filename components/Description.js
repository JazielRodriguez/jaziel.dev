import styles from "../styles/Description.module.css";
import Container from "./Container";
export default function Description({ contact, aboutMe, portfolio }) {
  class Description {
    constructor(title, desc) {
      this.title = title;
      this.desc = desc;
    }
  }
  let content;
  if (aboutMe) {
    content = new Description(
      "Acerca de Mí",
      "Aquí encontrarás mis pasiones y alguna cosa divertida"
    );
  }
  if (contact) {
    content = new Description(
      "Contacto",
      "Vienes a saludar, quieres colaborar en algo increible o te interesa lo que hago, deja tu informacion acá abajo para ponernos en contacto"
    );
  }
  if (portfolio) {
    content = new Description(
      "Portafolio",
      "Todo mi trabajo como desarrollador lo puedes ver aqui"
    );
  }
  return (
    <div className={styles.description}>
      <Container>
        <h1>{content.title}</h1>
        <p>{content.desc}</p>
      </Container>
    </div>
  );
}
