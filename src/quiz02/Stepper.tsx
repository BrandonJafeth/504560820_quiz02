import { useContext } from "react";
import MyContext from "../context/MyContext";

const Stepper = () => {
    const { step} = useContext(MyContext)
   
  return (
    <div className='stepper flex'>
        <h2 className={step == 1 ? 'active' : ''} >1</h2>
        <h2 className={step == 2 ? 'active' : ''} >2</h2>
        <h2 className={step == 3 ? 'active' : ''} >3</h2>
  
    </div>
  )
}

export default Stepper
