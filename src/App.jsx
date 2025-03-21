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

  const products = [
    {title: 'Mai', id: 1},
    {title: 'Kagenou', id: 2},
    {title: 'Phongsaphon', id: 3},
  ];

  function handleInCreaseClick() {
    setCount(count + 1)
  }

  function handleDeCreaseClick() {
    setCount(count - 1)
  }

  return (
    // React Fragment
    <>
      <h1>Welcome to my app</h1>
      <p>My name is {user.firstName} {user.lastName}</p>
      <img src={user.imgPic} width="150" height="150" alt={user.firstName}/>
      <p>{count}</p>
      <button onClick={handleInCreaseClick}>Increase</button>
      <button onClick={handleDeCreaseClick}>Decrease</button>
      <MyButton />
      {/* Ternary Operator */}
      {ifTrue ? "Yes, it's true" : "No, it's false"}
      <ul>
        {products.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
