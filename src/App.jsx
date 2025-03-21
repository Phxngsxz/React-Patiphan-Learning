import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Phongsaphon somsin")
  const [ifTrue, setIfTrue] = useState(true)

  const user = {
    firstName: "Mai",
    lastName: "Kagenou",
    imgPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvLHSQNGAB1RJVNtDavx0XhhXMKA-rTnPUw&s"
  }

  return (
    // React Fragment
    <>
      <h1>Welcome to my app</h1>
      <p>My name is {user.firstName} {user.lastName}</p>
      <img src={user.imgPic} width="150" height="150" alt={user.firstName}/>
      <p>{count}</p>
      <MyButton />
      {/* Ternary Operator */}
      {ifTrue ? "Yes, it's true" : "No, it's false"}
    </>
  )
}

export default App
