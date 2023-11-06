"use client";
import style from "@/shared/ui/counter/Counter.module.scss";
import Arrow from "/public/icon/ArrowLeft.svg";
import { increment, decrement } from "@/store/slice/counterSlice/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { MouseEvent, MouseEventHandler } from "react";

interface CounterProps {
  NumberOfProducts: number;
  defaulPlaceholder: string;
  decrement: () => void;
  increment: () => void;
  value: number;
}
const Counter = (props: CounterProps) => {
  const { NumberOfProducts, defaulPlaceholder, value, decrement, increment } = {
    ...props,
  };
  return (
    <span className={style.container}>
      <button className={style.btn} onClick={decrement}>
        <Arrow />
      </button>
      <input
        className={`${style.input} subtitle12`}
        placeholder={defaulPlaceholder}
        type="number"
        defaultValue={value}
      />
      <button className={style.btn} onClick={increment}>
        <Arrow className={style.rightArrow} />
      </button>
    </span>
  );
};

export default Counter;
