import { useState } from "react";
import MyContext from "./MyContext";

export interface IThemeProviderProps {
    children: React.ReactNode;
}  
  // Create a ThemeProvider component to provide the context value to child components
  export const MyProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [step, setStep] = useState(1);
    const [products, setProducts] = useState([
      { id:1, step:1, name: 'Mouse', price: 60 },
      { id:2, step:1, name: 'Monitor', price: 70 },
      { id:4, step:2, name: 'Keyboard', price: 80 },
      { id:5, step:2, name: 'Headset', price: 90 },
      { id:6, step:3, name: 'Tablet', price: 100 },
      { id:7, step:3, name: 'Hub', price: 110 },
      { id:8, step:4, name: 'Hub', price: 110 }
    ]);

    const changeStep = (newStep) => {
      setStep(newStep);
    };
    return (
      <MyContext.Provider value={{step, products, setStep : changeStep, setProducts }} >
         {children}
      </MyContext.Provider>
    );
  };