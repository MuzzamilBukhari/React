import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'

function MyApp (){
  const [count, setCount] = useState (0);

  const addCount = () => {
    if (count != 20){
      setCount(count + 1);
    }
  }
  const delCount = () => {
    if (count != 0){
      setCount(count - 1);
    }
  }
  return(
    <>
    <h1>Hello Counter </h1>
    <h3>Counter = {count}</h3>
    <button onClick={addCount}>Increment count</button>
    <button onClick={delCount}>Decremenet count</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
)
