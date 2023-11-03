import Message from "/public/icon/message.svg";
import Phone from "/public/icon/phone.svg";
import style from "@/widgets/Footer/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Link href="/phone" className="subtitle12">
          <Phone />
          +38 (000) 123-12-12
        </Link>
        <Link href="/message" className="subtitle12">
          <Message />
          support@solar.ua
        </Link>
        <Link href="/pages/political" className="subtitle12">
          <abbr title="political">Политика конфиденциальности </abbr>
        </Link>
        <Link href="/pages/forInstallers" className="subtitle12">
          <abbr title="forInstallers">Компаниям-инсталяторам</abbr>
        </Link>
      </div>
    </div>
  );
};

export { Footer };
