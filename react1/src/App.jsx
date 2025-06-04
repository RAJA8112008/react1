import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // useEffect(()=>{
  //   console.log("UI is REndering");
  // });
  useEffect(()=>{
    console.log("I am here ");
  },[]);
  const[text,settext]=useState("");
function change(event){
console.log(text)
settext(event.target.value);
}
  return (
    <>
    <input type="text" onChange={change}></input>
    </>
  )
}

export default App
