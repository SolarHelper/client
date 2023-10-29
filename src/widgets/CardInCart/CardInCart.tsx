import Counter from "@/shared/ui/Counter/Counter";
import BasketSvg from "@/shared/ui/svg/BasketSvg";
import style from "@/widgets/CardInCart/CardInCart.module.scss";
import Image from "next/image";
import cardProduct from "/public/cardImage/cardProduct1.png";

interface CardInCartProps {
  productName: string;
  productPrice: number;
  NumberOfProducts: number;
}

const CardInCart = ({
  productName,
  productPrice,
  NumberOfProducts,
}: CardInCartProps) => {
  return (
    <div className={style.container}>
      <Image
        className={style.img}
        src={cardProduct}
        alt="product"
        width={88}
        height={120}
      ></Image>
      <div className={style.wrapper}>
        <div className={style.infoContainer}>
          <span className="title18">{productPrice}р </span>
          <span className="subtitle18">{productName}</span>
          <Counter NumberOfProducts={NumberOfProducts} />
        </div>
        <div className={style.imgContainer}>
          <BasketSvg />
        </div>
      </div>
    </div>
  );
};

export default CardInCart;
