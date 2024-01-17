import { SocNet } from "../SocNet/SocNet";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__copyright}>© 2023 @bug_dev</div>
        <SocNet />
      </div>
    </footer>
  );
};
