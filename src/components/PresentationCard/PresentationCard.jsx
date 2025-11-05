import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./PresentationCard.module.css";
import { useContext } from "react";

export default function PresentationCard() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={styles.hero}>
      <div className={styles["hero-top"]}>
        <h1>HI, I'M MARCO GULINO</h1>
        <h2>JR. WEB DEVELOPER</h2>
        <p>Constantly learning and improving, one project at a time.</p>
      </div>
      <div className={styles["hero-img"]}>
        <img
          src={darkMode ? "./images/avatarv2dark.png" : "./images/avatarv2.jpg"}
          alt="Personal Avatar"
        />
      </div>
    </section>
  );
}
