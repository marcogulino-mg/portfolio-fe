import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header() {
  const { darkMode, themeToggle } = useContext(ThemeContext);

  return (
    <header>
      <div className={styles.logo}>
        <img
          src={darkMode ? "./images/logodark.png" : "./images/logo.png"}
          alt="logo"
        />
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
      <div className={styles["toggle-dn"]} onClick={themeToggle}>
        {darkMode ? (
          <FontAwesomeIcon
            icon={faSun}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            size="2xl"
            style={{ color: "#000000" }}
          />
        )}
      </div>
    </header>
  );
}
