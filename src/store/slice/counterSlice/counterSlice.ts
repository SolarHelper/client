"use client";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  // Создаем переменную для сохранения данных которые приходят c action.payload (переменных может быть сколько угодно)
  value: number;
}

const initialState = {
  // Создаем переменную для сохранения данных которые приходят c action.payload (переменных может быть сколько угодно)
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Функции которые мы экспортируем наружу, для того чтобы забрать данные и обработать их здесь
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Эти функции мы експортируем в компоненты и внутрь них прокидываем данные  (через dispatch)
export const { increment, decrement } = counterSlice.actions;

// Это экспортируется в стор (store.js)
export default counterSlice.reducer;
