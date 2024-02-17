import { createContext } from "react"
import { useState } from "react";
const UserContext = createContext(); 
function Userdetails(props) {
  const [name, setName] = useState("Gabby")
    const Name = "Gabby"
    const Age = [1,2,3,4]
    function pop(){
      alert("Hello")
    }
    const value = {Name, Age, pop, name, setName}
  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  )
}
export {Userdetails, UserContext}