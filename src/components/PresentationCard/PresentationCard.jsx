import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./PresentationCard.module.css";
import { useContext } from "react";
import ProjectsSection from "../../pages/ProjectsSection";

export default function PresentationCard() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles["hero-top"]}>
          <h1>HI, I'M MARCO GULINO</h1>
          <h2>JR. WEB DEVELOPER</h2>
          <p>Constantly learning and improving, one project at a time.</p>
        </div>
        <div className={styles["hero-img"]}>
          <img
            src="./images/avatar-tr.svg" 
            alt="Personal Avatar"
          />
        </div>
      </section>
      <section className={styles.hero} id="projects">
        <ProjectsSection />
      </section>
    </>
  );
}
