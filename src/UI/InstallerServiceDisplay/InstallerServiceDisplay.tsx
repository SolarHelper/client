import Image from "next/image";
import styles from "./styles.module.scss";
import factoryIcon from "public/icons/factory.svg";
import houseIcon from "public/icons/house.svg";

interface InstallerServiceDisplayProps {
  isHouseServiced: boolean;
  isFactoryServiced: boolean;
}

const InstallerServiceDisplay = (props: InstallerServiceDisplayProps) => {
  const { isHouseServiced, isFactoryServiced } = props;
  return (
    <div className={styles.services}>
      {isHouseServiced && (
        <Image src={houseIcon} alt="house" className={styles.icon} />
      )}
      {isFactoryServiced && (
        <Image src={factoryIcon} alt="factory" className={styles.icon} />
      )}
    </div>
  );
};

export default InstallerServiceDisplay;
