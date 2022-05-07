import styles from '../styles/Hero.module.css'
const Hero = ({ children }) => {
  return <div className={styles.hero}>{children}</div>;
};
export default Hero;
