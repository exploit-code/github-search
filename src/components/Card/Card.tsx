import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { IUserCard } from "../../models/models";

const Card = ({ login, html_url, avatar_url }: IUserCard) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__avatar} src={avatar_url} alt="avatar" />
      <div className={styles.card__info}>
        <div>{login}</div>
        <Link className={styles.card__link} to={html_url}>
          Visit profile
        </Link>
      </div>
    </div>
  );
};

export default Card;
