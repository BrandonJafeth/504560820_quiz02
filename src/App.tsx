
import './App.css'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'
import { MyProvider } from './context/MyContextProvider'
import { useContext } from 'react'
import MyContext from './context/MyContext'



function App() {
  return (
    <MyProvider>
      <AppComponent />
    </MyProvider>
  );
}

function AppComponent() {
  const { step, setStep } = useContext(MyContext);

  return (
    <>
      <h1>Quiz 02</h1>
      <Stepper/>
      <Content/>
      <div className='flex'>
        <button type="button" onClick={() => setStep(step - 1)}>Prev</button>
        <button type="button" onClick={() => setStep(step + 1)}>Next</button>
      </div>
    </>
  );
}

export default App;
