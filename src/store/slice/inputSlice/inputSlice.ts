"use client";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  value: string;
}

const initialState = {
  // Создаем переменную для сохранения данных которые приходят c action.payload (переменных может быть сколько угодно)
  value: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    // Функции которые мы экспортируем наружу, для того чтобы забрать данные и обработать их здесь
    inputValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Эти функции мы експортируем в компоненты и внутрь них прокидываем данные  (через dispatch)
export const { inputValue } = inputSlice.actions;

// Это экспортируется в стор (store.js)
export default inputSlice.reducer;
