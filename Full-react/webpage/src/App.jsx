import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function Button({text,fire}){
  return <button style={{backgraoundColor: 'pink', color: 'purple', margin: 4}}
  onClick={fire}>{text}</button>
}

function App() {
  const [myGuess, setMyGuess] = useState('no guess yet')

  return (
    
      <div>
       
      <h1>Welcome to Rock Pepper Scissor</h1>
      <div>{myGuess}</div>
      <Button text= "rock" fire={()=>{setMyGuess('rock')}}/>
      <Button text= "pepper" fire={()=>{setMyGuess('pepper')}}/>
      <Button text= "scissor" fire={()=>{setMyGuess('scissor')}}/>
          
      </div>
      
    
  )
}

export default App
