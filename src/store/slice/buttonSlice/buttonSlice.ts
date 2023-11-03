"use client";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  // value: boolean;
}

const initialState = {
  // Создаем переменную для сохранения данных которые приходят c action.payload (переменных может быть сколько угодно)
  value: {},
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    // Функции которые мы экспортируем наружу, для того чтобы забрать данные и обработать их здесь
    buttonValue: (state, action) => {
      console.log(action.payload);
    },
  },
});

// Эти функции мы експортируем в компоненты и внутрь них прокидываем данные  (через dispatch)
export const { buttonValue } = buttonSlice.actions;

// Это экспортируется в стор (store.js)
export default buttonSlice.reducer;
