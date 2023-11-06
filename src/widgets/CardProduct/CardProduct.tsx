import style from "@/widgets/CardProduct/CardProduct.module.scss";
import Image from "next/image";
import cardProduct from "/public/cardImage/cardProduct1.png";
import RatingForm from "@/shared/ui/RatingForm/RatingForm";
import Counter from "@/shared/ui/Counter/Counter";
import Button from "@/shared/ui/Buttons/Button";
import BasketSvg from "@/shared/ui/svg/BasketSvg";

interface CardProductProps {
  productName: string;
  productPrice: number;
  productRaiting: number;
  NumberOfProducts: number;
}

const CardProduct = (props: CardProductProps) => {
  const { productName, productPrice, productRaiting, NumberOfProducts } = {
    ...props,
  };
  return (
    <section className={style.container}>
      <Image
        className={style.img}
        src={cardProduct}
        alt="product"
        width={140}
        height={190}
      />
      <div className={style.infoContainer}>
        <div className="subtitle18">{productName}</div>
        <div className="title18">{productPrice}p </div>
        <RatingForm productRaiting={productRaiting} />
      </div>
      <div className={style.btnContainer}>
        <Counter
          value={value}
          decrement={decrement}
          increment={increment}
          NumberOfProducts={NumberOfProducts}
        />
        <Button>
          в корзину
          <BasketSvg />
        </Button>
      </div>
    </section>
  );
};

export default CardProduct;
