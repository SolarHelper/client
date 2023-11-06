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
        <Link className={`${style.link} subtitle12`} href="/pages/political">
          Политика конфиденциальности
        </Link>
        <Link
          href="/pages/forInstallers"
          className={`${style.link} subtitle12`}
        >
          Компаниям-инсталяторам
        </Link>
      </div>
    </div>
  );
};

export { Footer };
