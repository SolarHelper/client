import Image from "next/image";
import styles from "./styles.module.scss";

interface CardParamProps {
  text: string;
  icon: any;
}

const InstallerCardParam = (props: CardParamProps) => {
  const { icon, text } = props;
  return (
    <div className={styles.param}>
      <Image src={icon} alt={icon} className={styles.icon} />
      <p>{text}</p>
    </div>
  );
};

export default InstallerCardParam;
