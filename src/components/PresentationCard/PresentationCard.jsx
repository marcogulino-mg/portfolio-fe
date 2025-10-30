import styles from "./PresentationCard.module.css";

export default function PresentationCard() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-top"]}>
        <h2>Lorem ipsum</h2>
      </div>
      <div className={styles["hero-img"]}>
        <h2>Image Placeholder</h2>
      </div>
      <div className={styles["hero-bot"]}>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
      </div>
    </section>
  );
}
