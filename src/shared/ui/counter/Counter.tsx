"use client";
import style from "@/shared/ui/counter/Counter.module.scss";
import Arrow from "/public/icon/ArrowLeft.svg";
import { InputHTMLAttributes } from "react";

interface CounterProps {
  numberOfProducts: number;
  decrement: () => void;
  increment: () => void;
  onchange: (e: InputHTMLAttributes<HTMLSelectElement>) => void;
}
const Counter = (props: CounterProps) => {
  const { numberOfProducts, decrement, increment, onchange } = {
    ...props,
  };
  return (
    <span className={style.container}>
      <button className={style.btn} onClick={decrement}>
        <Arrow />
      </button>
      <span className={`${style.input} subtitle12`}>{numberOfProducts}</span>
      <button className={style.btn} onClick={increment}>
        <Arrow className={style.rightArrow} />
      </button>
    </span>
  );
};

export default Counter;
