import Installer from "public/cardImage/installers.png";
import Image from "next/image";
import Verified from "public/icon/verified.svg";
import House from "public/icon/house.svg";
import Factory from "public/icon/factory.svg";
import style from "@/widgets/CardInstallers/CardsInstallers.module.scss";
interface CardInstallersProps {
  cityInstallers: string;
  numberOfOrders: number;
  nuberFeedback: number;
}

const CardInstallers = (props: CardInstallersProps) => {
  const { cityInstallers, numberOfOrders, nuberFeedback } = { ...props };
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <div className={style.advantages}>
          <Verified />
          <House />
          <Factory />
        </div>
        <Image src={Installer} alt="Installer" />
      </div>
      <div className={style.infoContainer}>
        <span className="title18">
          IN GELIOS SOLAR POWER PLANT IN GELIOS SOLAR POWER
        </span>
        <div className={style.status}>
          <span>{cityInstallers}</span>
          <span>{numberOfOrders} в процессе</span>
          <span>{nuberFeedback} отзыва</span>
        </div>
      </div>
    </div>
  );
};

export default CardInstallers;
