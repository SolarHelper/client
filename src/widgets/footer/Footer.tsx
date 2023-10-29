import MessageSvg from "@/shared/ui/svg/MessageSvg";
import PhoneSvg from "@/shared/ui/svg/PhoneSvg";
import style from "@/widgets/Footer/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <span className="subtitle12">
          <PhoneSvg />
          +38 (000) 123-12-12
        </span>
        <Link href="/#" className="subtitle12">
          <MessageSvg />
          support@solar.ua
        </Link>
        <Link href="/pages/political" className="subtitle12">
          <abbr title="political">Политика конфиденциальности</abbr>
        </Link>
        <Link href="/pages/forInstallers" className="subtitle12">
          <abbr title="forInstallers">Компаниям-инсталяторам</abbr>
        </Link>
      </div>
    </div>
  );
};

export { Footer };
