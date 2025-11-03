import styles from "./PresentationCard.module.css";

export default function PresentationCard() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-top"]}>
        <h1>HI, I'M MARCO GULINO</h1>
        <h2>JR. WEB DEVELOPER</h2>
        <p>Constantly learning and improving, one project at a time.</p>
      </div>
      <div className={styles["hero-img"]}>
        <img src="./images/avatarv2.jpg" alt="Personal Avatar" />
      </div>
    </section>
  );
}
