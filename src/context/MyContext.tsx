import React from "react";

 interface Product {
    id: number;
    name: string;
    step: number;
    price: number;
}

type MyContextData = {
    step: number;
    products: Product[];
    setStep: (step: number) => void;
    setProducts: (products: Product[]) => void;
}

const MyContext = React.createContext<MyContextData>({
    step: 1,
    products: [],
    setStep: () => {},
    setProducts: () => {},
});

export default MyContext;