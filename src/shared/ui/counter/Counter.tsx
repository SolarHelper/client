"use client";
import style from "@/shared/ui/counter/Counter.module.scss";
import ArrowLeftSvg from "../svg/ArrowLeftSvg";
import ArrowRightSvg from "../svg/ArrowRightSvg";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/store/slice/counterSlice/counterSlice";

interface CounterProps {
  NumberOfProducts: number;
}
const Counter = ({ NumberOfProducts }: CounterProps) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <span className={style.container}>
      <button className={style.btn} onClick={() => dispatch(decrement())}>
        <ArrowLeftSvg />
      </button>
      <input
        className={`${style.input} subtitle12`}
        placeholder="0"
        type="text"
        value={count}
      />
      <button className={style.btn} onClick={() => dispatch(increment())}>
        <ArrowRightSvg />
      </button>
    </span>
  );
};

export default Counter;
