import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faSquareGithub,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faGoogle}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faSquareGithub}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
