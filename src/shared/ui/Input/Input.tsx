"use client";
import style from "@/shared/ui/Input/Input.module.scss";
import { ChangeEvent } from "react";

interface InputProps {
  placeholder: string;
  label?: string;
  children?: string | React.ReactNode;
  onchange: (e: ChangeEvent) => void;
  value: string;
}

const Input = (props: InputProps) => {
  const { placeholder, label, children, onchange, value } = {
    ...props,
  };
  return (
    <div className={style.container}>
      {label && (
        <label className="title18" htmlFor={label}>
          {label}
        </label>
      )}
      <div className={style.inputContainer}>
        <input
          onChange={onchange}
          value={value}
          className={`${style.input} subtitle12`}
          type="text"
          placeholder={placeholder}
        />
        <span className="subtitle12">{children}</span>
      </div>
    </div>
  );
};

export default Input;
