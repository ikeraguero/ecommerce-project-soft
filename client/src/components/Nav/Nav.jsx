import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "./SearchBar/SearchBar";

function Nav({ categories }) {
  if (!categories || categories.length === 0) {
    return <div>Loading...</div>; // 
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
          <SearchBar />
        </div>
      </div>
      <div className={styles.navBottom}>
        <div className={styles.navBottomLeft}>
          <span>SHOP ALL</span>
          {categories.map((category) => (
            <Link to="/product" key={category.id} className={styles.navLink}>
              {category.name}
            </Link>
          ))}
          <Link to="/addproduct" className={styles.navLink}>
            Add Products
          </Link>
        </div>
        <div className={styles.navBottomRight}>
          <div className={styles.navBottomRightUser}>
            <ion-icon name="caret-down-outline"></ion-icon>
            <ion-icon name="person-circle-outline"></ion-icon>
          </div>
          <div className={styles.navBottomRightCart}>
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
