import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [item, setItem] = useState({})

  const handleChange = (e) => {
   let name = e.target.name;
   let value = e.target.value;
   setItem({[name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   setTodos([...todos, item])
  }
console.log(todos);
  return (
    <div className='main'> <div className='section' style={{border: '1px solid #94d6e8aa', gap: '10px'}}>
     <h2 style={{color: "#61dafb"}}>Dynamic List Manager</h2>
   <form className='form-body' onSubmit={handleSubmit}>
   <input name='name' required onBlur={handleChange} placeholder='Enter an item'/>
  <div className='button-div'><button >Add Item</button></div> 
   </form>
   <div className='container' style={{backgroundColor: '#94d6e8aa'}}>
   <ul>
    {todos.map((todo, index) => (
      <li style={{color: "black"}} key={index}>
        <span >{todo.name}</span>
      </li>
    ))}
</ul>
   </div>
    </div></div>
   
  )
}

export default App
