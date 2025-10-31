import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";

export default function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
        </ul>
      </nav>
      <div className={styles["toggle-dn"]}>
        <FontAwesomeIcon
          icon={faMoon}
          size="2xl"
          style={{ color: "#000000" }}
        />
      </div>
    </header>
  );
}
