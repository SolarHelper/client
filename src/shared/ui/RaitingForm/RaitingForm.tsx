import style from "@/shared/ui/RaitingForm//RaitingForm.module.scss";
import StarSvg from "../svg/StarSvg";
interface RaitingFormProps {
  productRaiting: number;
}

const RaitingForm = ({ productRaiting }: RaitingFormProps) => {
  return (
    <div className={style.raiting}>
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
    </div>
  );
};

export default RaitingForm;
