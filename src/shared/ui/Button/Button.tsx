'use client';
import style from '@/shared/ui/Button/Button.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { buttonValue } from '@/store/slice/buttonSlice/buttonSlice';
import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  children: string | React.ReactNode;
  onclick: () => void;
  customBtnClass: string;
};

const Button = ({ children, onclick, customBtnClass }: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      aria-label="Increment value"
      className={clsx(style.btn, customBtnClass)}>
      {children}
    </button>
  );
};

export default Button;
