import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import clockIcon from "public/icons/clock.svg";
import geolocationIcon from "public/icons/geolocation.svg";
import messageIcon from "public/icons/message.svg";
import checkedIcon from "public/icons/checked.svg";
import installerImg from "public/images/installer.jpg";
import InstallerCardParam from "@/UI/InstallerCardParam/InstallerCardParam";
import InstallerServiceDisplay from "@/UI/InstallerServiceDisplay/InstallerServiceDisplay";

interface CardProps {
  id: number;
  image: string;
  name: string;
  city: string;
  isCheckedCompany: boolean;
  reviews: number;
  inProcess: number;
  isFactoryServiced: boolean;
  isHouseServiced: boolean;
}

const Card = (props: CardProps) => {
  const {
    id,
    name,
    city,
    reviews,
    inProcess,
    isFactoryServiced,
    isHouseServiced,
  } = props;
  return (
    <div className={styles.card}>
      <Image
        src={installerImg}
        alt={name}
        className={styles.avatar}
        height={94}
        width={218}
      />
      <div className={styles.cardInfo}>
        <Link href={`/installer/${id}`} className={styles.link}>
          <h3>{name}</h3>
        </Link>
        <div className={styles.params}>
          <InstallerCardParam icon={geolocationIcon} text={city} />
          {/* тут подумать логику отображения в зависимости от проверенности компании */}
          <InstallerCardParam
            icon={checkedIcon}
            text={"Проверенная компания"}
          />
          <div className={styles.paramsVert}>
            {/* добавить форматирование от числа */}
            <InstallerCardParam
              icon={messageIcon}
              text={reviews + " отзывов"}
            />
            <InstallerCardParam
              icon={clockIcon}
              text={"В процессе: " + inProcess}
            />
          </div>
          <InstallerServiceDisplay
            isFactoryServiced={isFactoryServiced}
            isHouseServiced={isHouseServiced}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
