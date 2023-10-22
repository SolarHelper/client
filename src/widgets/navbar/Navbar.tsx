"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import sun from "../../../public/Icon/sun.svg";
import cart from "../../../public/Icon/cart.svg";
import user from "../../../public/Icon/user.svg";
import basket from "../../../public/Icon/basket.svg";

import Button from "@/shared/ui/buttons/Button";
const Navbar = () => {
  return (
    <nav className={styles.Container}>
      <Link className={styles.Logo} href="/">
        <Image src={sun} width={43} height={40} alt={"sun"} />
        SolarHelper
      </Link>
      <div className={styles.Navbar}>
        <div>
          <Link href="/pages/hardware">Оборудование</Link>
          <Link href="/pages/installers">Инсталляторы</Link>
          <Link href="/pages/calculator">Калькулятор выработки</Link>
        </div>
        <div>
          <Link href="/pages/cart">
            <Image src={cart} width={40} height={34} alt={"cart"} />
          </Link>
          <Link href="/pages/user">
            <Image src={user} alt={"user"} />
          </Link>
        </div>
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
