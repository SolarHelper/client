'use client';
import style from '@/shared/ui/Inputs/Input.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { inputValue } from '@/store/slice/inputSlice/inputSlice';

interface InputProps {
  placeholder: string;
  label?: string;
  children?: string | React.ReactNode;
}

const Input = ({ placeholder, label, children }: InputProps) => {
  const value = useAppSelector((state) => state.input.value);
  const dispatch = useAppDispatch();

  return (
    <div className={style.container}>
      {label && (
        <label className="title18" htmlFor={label}>
          {label}
        </label>
      )}
      <div className={style.inputContainer}>
        <input
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
