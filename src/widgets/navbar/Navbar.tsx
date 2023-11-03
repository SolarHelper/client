import Link from "next/link";
import styles from "./Navbar.module.scss";
import Cart from "/public/icon/cart.svg";
import Sun from "/public/icon/sun.svg";
import UserIcon from "/public/icon/userIcon.svg";
import MenuBurger from "/public/icon/menuBurger.svg";
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link className={`${styles.logo}  title18`} href="/">
        <Sun />
        SolarHelper
      </Link>
      <div className={styles.navbar}>
        <div className={styles.pages}>
          <Link href="/pages/hardware" className="subtitle12">
            Оборудование
          </Link>
          <Link href="/pages/installers" className="subtitle12">
            Инсталляторы
          </Link>
          <Link href="/pages/calculator" className="subtitle12">
            Калькулятор выработки
          </Link>
        </div>

        <div className={styles.profile}>
          <Link className={styles.cart} href="/pages/cart">
            <Cart />
          </Link>
          <Link className={styles.user} href="/pages/user">
            <UserIcon />
          </Link>
        </div>
        <button className={styles.menuBurger}>
          <MenuBurger className="title18" />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };

// home
// hardware
// installers
// calculator
// shopping cart
// user
