import * as http2 from "http2";
import Order from "@/Components/Order/Order";
import OrderForm from "@/Components/OrderForm/OrderForm";

export default function Page () {
    return (
        <>
            <h2>Навигация</h2>
            <h2>Компонент корзина</h2>
            <Order/>
            <OrderForm/>
        </>


    )
}