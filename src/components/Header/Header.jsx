import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.logo}>Logo</div>
      <nav>
        <ul>
          <li>
            <a href="#">Tasto 1</a>
          </li>
          <li>
            <a href="#">Tasto 2</a>
          </li>
          <li>
            <a href="#">Tasto 3</a>
          </li>
        </ul>
      </nav>
      <div className={styles["toggle-dn"]}>Icon D/N</div>
    </header>
  );
}
