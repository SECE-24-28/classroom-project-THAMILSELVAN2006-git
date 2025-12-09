import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content from './Content'
function App() {
  /*let city="CBE"
  let nums=[11,22,33]
  let [age,setage]=useState(21)

  let [num,setnum]=useState(10)
  return (
    <>
     <h1>Mern is not a Framework it is a library</h1>
     <p>I am from {city}</p>
     <p>Lucky Number:{nums}</p>
     <p>{"true"}</p>
     <p>{JSON.stringify({name:"rohit",age:18} )}</p>
     <p>Age:{age}</p>
     <button onClick={() => setage(18)}>Update Age</button>
    </>
  )
*/
  /* let [num,setnum]=useState(10)
   return (
    <>
     <h1>Counter App</h1>
     <p>Count:{num}</p>
     <button onClick={()=>setnum(num+1)}>+</button>
     <button onClick={()=>setnum(num-1)}>-</button>
     </>
   )*/
    
    let frds=["Rohit","Rahul","Ramesh","Rajesh"]
    return (
      <>
      <Header title={"Friends List"} city={"Chennai"}/> 
      {(frds.length)?<Content frnds={frds}/>:(<h1>List is empty</h1>)}
    </>
    )

   
}

export default App
