import styles from '@/shared/ui/Cart/Cart.module.scss';
import CartIcon from '/public/icon/cart.svg';

interface CartProps {
  numberProducts: number;
}

const Cart = ({ numberProducts }: CartProps) => {
  return (
    <div className={styles.container}>
      <CartIcon className={styles.cart} />
      <div className={styles.count}>{numberProducts}</div>
    </div>
  );
};

export default Cart;
