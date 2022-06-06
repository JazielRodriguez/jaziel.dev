import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";
// const ProjectCard = ({ project }) => {
//   return (
//     <a  className={styles.card}>
//       <h3 style={{ textAlign: "center" }}>{project.title}</h3>
//       <Image src={project.img} alt={project.title} objectFit="cover" />
//     </a>
//   );
// };
// export default ProjectCard;

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>
      <Image src={project.img} alt={project.title} objectFit="cover" />

      <div className={styles.actions}>
        <a target="_blank" rel="noreferrer" href={project.link}>
          DEMO
        </a>
        <a target="_blank" rel="noreferrer" href={project.git}>
          REPO
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
