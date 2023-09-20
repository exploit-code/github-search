import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
