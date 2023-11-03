"use client";
import style from "@/shared/ui/Buttons/Button.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { buttonValue } from "@/store/slice/buttonSlice/buttonSlice";
import React from "react";

type ButtonProps = {
  children: string | React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  const click = useAppSelector((state) => state.c);
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(buttonValue(1))}
      aria-label="Increment value"
      className={style.btn}
    >
      {children}
    </button>
  );
};

export default Button;
