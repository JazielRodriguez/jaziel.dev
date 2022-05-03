import Container from "../components/Container";
import Icon from "@mdi/react";
import {
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiReact,
  mdiNodejs,
  mdiDatabase,
} from "@mdi/js";
import styles from "../styles/TechnologiesList.module.css";
export default function TechnologiesList() {
  const technologies = [
    { tech: "HTML", icon: mdiLanguageHtml5 },
    { tech: "CSS", icon: mdiLanguageCss3 },
    { tech: "JavaScript", icon: mdiLanguageJavascript },
    { tech: "React.Js", icon: mdiReact },
    { tech: "Node.Js", icon: mdiNodejs },
    { tech: "MongoDB", icon: mdiDatabase },
  ];
  return (
    <Container>
      <ol className={styles["tech-list"]}>
        <h3>Tecnologías con las que trabajo:</h3>
        <div>
          <div>
            {" "}
            {technologies.map((i) => (
              <li className={styles["tech-item"]} key={i.tech}>
                <p>{i.tech}</p>
                <Icon path={i.icon} size="3rem" />
              </li>
            ))}
          </div>
        </div>
      </ol>
    </Container>
  );
}
