import style from "@/widgets/CardProduct/CardProduct.module.scss";
import Image from "next/image";
import cardProduct from "/public/cardImage/cardProduct1.png";
import RatingForm from "@/shared/ui/RatingForm/RatingForm";
import Counter from "@/shared/ui/Counter/Counter";
import Button from "@/shared/ui/Button/Button";
import Basket from "/public/icon/basket.svg";
import { useState } from "react";

interface CardProductProps {
  productName: string;
  productPrice: number;
  productRaiting: number;
}

const CardProduct = (props: CardProductProps) => {
  const { productName, productPrice, productRaiting } = {
    ...props,
  };
  //число товара для покупки
  const [numberOfProducts, setNumberOfProducts] = useState(0);
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
          defaulPlaceholder="0"
          //убавить ед. товара
          decrement={() => setNumberOfProducts(numberOfProducts - 1)}
          //добавить ед. товара
          increment={() => setNumberOfProducts(numberOfProducts + 1)}
          //кол-во товара
          numberOfProducts={numberOfProducts}
        />
        <Button
          // отправить(купить) товар
          onclick={() => console.log(numberOfProducts)}
        >
          в корзину
          <Basket />
        </Button>
      </div>
    </section>
  );
};

export default CardProduct;
