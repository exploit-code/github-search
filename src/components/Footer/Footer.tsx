import styles from "./Footer.module.scss";
import { SocNet } from "../SocNet/SocNet";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__copyright}>© {currentYear} @bug_dev</div>
        <SocNet />
      </div>
    </footer>
  );
};
