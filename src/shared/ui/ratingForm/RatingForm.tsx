import style from "@/shared/ui/ratingForm/RatingForm.module.scss";

const RatingForm = ({ arrow }: { arrow: string }) => {
  return (
    <div className={style.Rating}>
      <span className={style.Rating__item}>★</span>
      <span className={style.Rating__item}>★</span>
      <span className={style.Rating__item}>★</span>
      <span className={style.Rating__item}>★</span>
      <span className={style.Rating__item}>★</span>
    </div>
  );
};

export default RatingForm;
