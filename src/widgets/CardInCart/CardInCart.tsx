import Basket from '/public/icon/basket.svg';
import style from '@/widgets/CardInCart/CardInCart.module.scss';
import Image from 'next/image';
import cardProduct from '/public/cardImage/cardProduct1.png';
import Counter from '@/shared/ui/Counter/Counter';
import clsx from 'clsx';

interface CardInCartProps {
  productName: string;
  productPrice: number;
  NumberOfProducts: number;
  containerClassName?: string;
}

const CardInCart = ({
  productName,
  productPrice,
  NumberOfProducts,
  containerClassName,
}: CardInCartProps) => {
  return (
    <div className={clsx(style.container, containerClassName)}>
      <Image className={style.img} src={cardProduct} alt="product" width={88} height={120} />
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
