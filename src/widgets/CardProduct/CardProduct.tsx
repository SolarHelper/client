import style from "@/widgets/CardProduct/CardProduct.module.scss";
import Image from "next/image";
import cardProduct from "/public/cardImage/cardProduct1.png";
import RaitingForm from "@/shared/ui/RaitingForm/RaitingForm";
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
      ></Image>
      <div className={style.infoContainer}>
        <div className="subtitle18">{productName}</div>
        <div className="title18">{productPrice}p </div>
        <RaitingForm productRaiting={productRaiting}></RaitingForm>
      </div>
      <div className={style.btnContainer}>
        <Counter NumberOfProducts={NumberOfProducts}></Counter>
        <Button>
          в корзину
          <BasketSvg />
        </Button>
      </div>
    </section>
  );
};

export default CardProduct;
