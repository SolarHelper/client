import Link from "next/link";
import styles from "./Navbar.module.scss";
import Sun from "/public/icon/sun.svg";
import UserIcon from "/public/icon/userIcon.svg";
import MenuBurger from "/public/icon/menuBurger.svg";
import Cart from "@/shared/ui/Cart/Cart";
const links = [
  { href: "/pages/hardware", name: "Оборудование" },
  { href: "/pages/installers", name: "Инсталляторы" },
  { href: "/pages/calculator", name: "Калькулятор выработки" },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link className={`${styles.logo}  title18`} href="/">
        <Sun />
        SolarHelper
      </Link>

      <div className={styles.navbar}>
        <div className={styles.pages}>
          {links.map((link) => (
            <Link href={link.href} className="subtitle12" key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className={styles.profile}>
          <Link className={styles.cart} href="/pages/cart">
            <Cart numberProducts={7} />
          </Link>
          <Link className={styles.user} href="/pages/user">
            <UserIcon />
          </Link>
        </div>

        <button className={styles.menuBurger}>
          <MenuBurger />
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
