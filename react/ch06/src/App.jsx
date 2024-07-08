import './App.css'
import Viwer from '../components/Viwer';
import Controller from '../components/Controller';
import {useState} from "react"

function App() {  
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
      setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viwer count={count}/>
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App
