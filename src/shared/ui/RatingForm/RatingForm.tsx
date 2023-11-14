import style from "@/shared/ui/RatingForm//RatingForm.module.scss";
import Star from "/public/icon/Star.svg";

interface RatingFormProps {
  productRating: number;
}

const RatingForm = ({ productRating }: RatingFormProps) => {
  return (
    <div className={style.rating}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
};

export default RatingForm;
