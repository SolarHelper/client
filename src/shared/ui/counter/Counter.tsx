import Image from "next/image";
import style from "@/shared/ui/counter/Counter.module.scss";
import arrowLeft from "../../../../public/Icon/arrowLeft.svg";
import arrowRight from "../../../../public/Icon/arrowRight.svg";
const Counter = ({ NumberOfProducts }: { NumberOfProducts: number }) => {
  return (
    <span className={style.Container}>
      <Image height={16} width={16} alt="arrow" src={arrowLeft} />
      <span>{NumberOfProducts}</span>
      <Image height={16} width={16} alt="arrow" src={arrowRight} />
    </span>
  );
};

export default Counter;
