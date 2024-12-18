import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Dropdown from "../../components/Dropdown/Dropdown";

import SearchBar from "./SearchBar/SearchBar";

import styles from "./Nav.module.css";

function Nav({ categories, setSearchProducts }) {
  const [loadedCategories, setLoadedCategories] = useState(null);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.username);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setLoadedCategories(categories);
    }
  }, [categories]);

  if (!loadedCategories) {
    return <div>Loading...</div>;
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navTop}>
        <div className={styles.rightSide}>
          <Link to={"/"} className={styles.navLink}>
            E-commerce
          </Link>
        </div>
        <div className={styles.rightSide}>
          <SearchBar setSearchProducts={setSearchProducts} />
        </div>
      </div>
      <div className={styles.navBottom}>
        <div className={styles.navBottomLeft}>
          <Link to={"/"} className={styles.navLink}>
            Shop All
          </Link>
          {loadedCategories.map((category) => (
            <Link to={`categories/${category.name}`} key={category.id} className={styles.navLink}>
              {category.name}
            </Link>
          ))}
          {role === "ADMIN" ? (
            <Link to="/dashboard" className={styles.navLink}>
              Dashboard
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className={styles.navBottomRight}>
          {isLoggedIn ? (
            <>
              <span>{`Hello, ${username}!`}</span>
              <div className={styles.navBottomRightUser}>
                <Dropdown className={styles.Dropdown} />

                <ion-icon name="person-circle-outline"></ion-icon>
              </div>
            </>
          ) : (
            <Link to={"/login"} className={styles.loginLink}>
              Log In
            </Link>
          )}

          <div className={styles.navBottomRightCart}>
            <Link to={isLoggedIn ? "/cart" : "/login"}>
              <ion-icon name="cart-outline"></ion-icon>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
