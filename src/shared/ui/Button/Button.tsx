"use client";
import style from "@/shared/ui/Button/Button.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { buttonValue } from "@/store/slice/buttonSlice/buttonSlice";
import React from "react";

type ButtonProps = {
  children: string | React.ReactNode;
  onclick: () => void;
};

const Button = ({ children, onclick }: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      aria-label="Increment value"
      className={style.btn}
    >
      {children}
    </button>
  );
};

export default Button;
