"use client";
import style from "@/shared/ui/Buttons/Button.module.scss";
import { buttonValue } from "@/store/slice/buttonSlice/buttonSlice";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type ButtonProps = {
  children: string | React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  const click = useSelector((state) => state.button.value);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(buttonValue())}
      aria-label="Increment value"
      className={style.btn}
    >
      {children}
    </button>
  );
};

export default Button;
