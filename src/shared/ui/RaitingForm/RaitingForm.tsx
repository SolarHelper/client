import style from "@/shared/ui/RaitingForm//RaitingForm.module.scss";
import Star from "/public/icon/Star.svg";

interface RaitingFormProps {
  productRaiting: number;
}

const RaitingForm = ({ productRaiting }: RaitingFormProps) => {
  return (
    <div className={style.raiting}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
};

export default RaitingForm;
