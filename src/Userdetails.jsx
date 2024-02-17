import { createContext } from "react"
const UserContext = createContext(); 
function Userdetails(props) {
    const Name = "Gabby"
    const Age = 25
    function pop(){
      alert("Hello")
    }
    const value = {Name, Age, pop}
  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  )
}
export {Userdetails, UserContext}