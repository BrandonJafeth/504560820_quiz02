import { useContext } from "react";
import MyContext from "../context/MyContext";

const Content = () => {
  const {step, products} = useContext(MyContext)

  const currentProducts = step > 3 || step < 1 ? products : products.filter(product => product.step === step);

  return (
    <div className="card">
      {currentProducts.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Content