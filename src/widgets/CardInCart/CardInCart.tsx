import Basket from "/public/icon/basket.svg";
import style from "@/widgets/CardInCart/CardInCart.module.scss";
import Image from "next/image";
import cardProduct from "/public/cardImage/cardProduct1.png";
import Counter from "@/shared/ui/Counter/Counter";

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
      />
      <div className={style.wrapper}>
        <div className={style.infoContainer}>
          <span className="title18">{productPrice}р</span>
          <span className="subtitle18">{productName}</span>
          <Counter NumberOfProducts={NumberOfProducts} />
        </div>
        <div className={style.imgContainer}>
          <button>
            <Basket />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInCart;
