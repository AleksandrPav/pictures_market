import {nanoid} from "nanoid";

const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Каталог",
    },
    {
        id: nanoid(),
        to: "/works",
        text: "Роботи клієнтів"
    },
    {
        id: nanoid(),
        to: "/shippings",
        text: "Оплата та доставка"
    },
    {
        id: nanoid(),
        to: "/contacts",
        text: "Контакти"
    },
    {
        id: nanoid(),
        to: "/cart",
        text: "Кошик"
    },
];

export default items;