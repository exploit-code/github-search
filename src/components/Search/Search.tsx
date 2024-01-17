import styles from "./Search.module.scss";
import { ISearchProps } from "../../models/models";

export const Search = ({ search, set_search }: ISearchProps) => {
  return (
    <input
      className={styles.search}
      value={search}
      onChange={(e) => set_search?.(e.target.value)}
      type="text"
      placeholder="GitHub Users Search..."
      autoFocus
    />
  );
};