import styles from "./PresentationCard.module.css";

export default function PresentationCard() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-top"]}>
        <h2>LOREM IPSUM</h2>
      </div>
      <div className={styles["hero-img"]}>
        <h2>IMAGE PLACEHOLDER</h2>
      </div>
      <div className={styles["hero-bot"]}>
        <h2>LOREM IPSUM DOLOR SIT AMET.</h2>
      </div>
    </section>
  );
}
