import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import factoryIcon from "public/factory.svg";
import houseIcon from "public/house.svg";
import clockIcon from "public/clock.svg";
import geolocationIcon from "public/geolocation.svg";
import messageIcon from "public/message.svg";
import checkedIcon from "public/checked.svg";
import installerImg from "public/installer.jpg";
import clsx from "clsx";

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
          <h3>{name}</h3>{" "}
        </Link>
        <div className={styles.params}>
          <div className={styles.param}>
            <Image
              src={geolocationIcon}
              alt="geolocation"
              className={styles.icon}
            />
            <p>{city}</p>
          </div>
          {/* тут подумать логику отображения в зависимости от проверенности компании */}
          <div className={styles.param}>
            <Image src={checkedIcon} alt="checked" className={styles.icon} />
            <p>{"Проверенная компания"}</p>
          </div>
          <div className={styles.paramsVert}>
            <div className={styles.param}>
              <Image src={messageIcon} alt="message" className={styles.icon} />
              {/* добавить форматирование от числа */}
              <p>{reviews + " отзывов"}</p>
            </div>
            <div className={styles.param}>
              <Image src={clockIcon} alt="clock" className={styles.icon} />
              <p>{"В процессе: " + inProcess}</p>
            </div>
          </div>
          <div className={styles.services}>
            {isHouseServiced && (
              <Image
                src={houseIcon}
                alt="house"
                className={clsx(styles.icon, styles.house)}
              />
            )}
            {isFactoryServiced && (
              <Image
                src={factoryIcon}
                alt="factory"
                className={clsx(styles.icon, styles.factory)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
