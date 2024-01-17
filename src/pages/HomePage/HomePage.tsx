import styles from "./HomePage.module.scss";
import { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../../store/github/github.api";
import { useDebounce } from "../../hooks/debounce";
import { Loader } from "../../components/Loader/Loader";
import { Card } from "../../components/Card/Card";
import { Search } from "../../components/Search/Search";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [renderUsers, setRenderUsers] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length! < 3,
  });

  useEffect(() => {
    setRenderUsers(debounced.length > 3);
  }, [debounced]);

  return (
    <section className={styles.home}>
      <Search search={search} set_search={setSearch} />

      <div className={styles.home__data}>
        {isLoading && <Loader />}
        {isError && <p>Error...</p>}
        {renderUsers && (
          <div className={styles.home__cards}>
            {data?.map((user) => (
              <Card
                login={user.login}
                html_url={user.html_url}
                avatar_url={user.avatar_url}
                type={user.type}
                key={user.id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
