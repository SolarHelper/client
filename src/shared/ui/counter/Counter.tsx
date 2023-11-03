"use client";
import style from "@/shared/ui/counter/Counter.module.scss";
import Arrow from "/public/icon/ArrowLeft.svg";
import { increment, decrement } from "@/store/slice/counterSlice/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface CounterProps {
  NumberOfProducts: number;
}
const Counter = ({ NumberOfProducts }: CounterProps) => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <span className={style.container}>
      <button className={style.btn} onClick={() => dispatch(decrement())}>
        <Arrow />
      </button>
      <input
        className={`${style.input} subtitle12`}
        placeholder="0"
        type="text"
      />
      <button className={style.btn} onClick={() => dispatch(increment())}>
        <Arrow className={style.rightArrow} />
      </button>
    </span>
  );
};

export default Counter;
