import Image from "next/image";
import styles from "./styles.module.scss";

interface CardParamProps {
  text: string;
  icon: string;
}

const InstallerCardParam = ({ icon, text }: CardParamProps) => {
  return (
    <div className={styles.param}>
      <Image src={icon} alt={icon} className={styles.icon} />
      <p>{text}</p>
    </div>
  );
};

export default InstallerCardParam;
