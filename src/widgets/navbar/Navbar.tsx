import Link from "next/link";
import styles from "./Navbar.module.scss";
import CartSvg from "@/shared/ui/svg/CartSvg";
import SunSvg from "@/shared/ui/svg/SunSvg";
import UserSvg from "@/shared/ui/svg/UserSvg";
import MenuBurgerSvg from "@/shared/ui/svg/MenuBurgerSvg";
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link className={`${styles.logo} title18`} href="/">
        <SunSvg />
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
            <CartSvg />
          </Link>
          <Link className={styles.user} href="/pages/user">
            <UserSvg />
          </Link>
        </div>
        <button>
          <MenuBurgerSvg />
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
