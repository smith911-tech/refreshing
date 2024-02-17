import { Link } from "react-router-dom"
import { UserContext } from "./Userdetails"
import { useContext } from "react"
export default function About() {
     const { Name, Age, pop, name, setName } = useContext(UserContext) || {};
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <p>{Name}</p>
      <button onClick={pop}>Pop</button>
      {Age.map((age, index) => (
        <p key={index}>{age}</p>
      ))}
      <p>{name}</p>
        <input
            type="text"
            onChange={(e) => setName(e.target.value)} />
    </>
  );
}