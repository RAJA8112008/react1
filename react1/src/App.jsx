import { useState } from 'react'
import './App.css'

function App() {
  const[text,settext]=useState("");
function change(){
console.log(text)
settext(raja)
}
  return (
    <>
    <input type="text" onChange={change}></input>
    </>
  )
}

export default App
