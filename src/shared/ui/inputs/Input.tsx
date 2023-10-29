"use client";
import style from "@/shared/ui/Inputs/Input.module.scss";
import { inputValue } from "@/store/slice/inputSlice/inputSlice";
import { useDispatch, useSelector } from "react-redux";

interface InputProps {
  placeholder: string;
  label?: string;
  children?: string | React.ReactNode;
}

const Input = ({ placeholder, label, children }: InputProps) => {
  const value = useSelector((state) => state.input.value);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <label className="title18" htmlFor={label}>
        {label}
      </label>
      <div className={style.inputContainer}>
        <input
          defaultValue={value}
          onChange={(e) => dispatch(inputValue(e.target.value))}
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
