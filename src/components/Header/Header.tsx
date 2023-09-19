import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <Link to="/favorites">favorites</Link>
      </div>
    </header>
  );
};

export default Header;
