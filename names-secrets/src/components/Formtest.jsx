import React, { useState } from 'react'
import { addNewName } from '../services/apiConfig'

export default function Form() {
  const [newName, setNewName] = useState({
    name: "",
    meaning: "", 
    pronunciation: "",
    history: "",
    popularity: ""
  })
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    await addNewName(newName)
  }

  const handleInput = (e) => {
    const { id, value } = e.target
    setNewName((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  return (
    <div>
      <h1>Add a new name</h1>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input type="text" placeholder='input name'
          value={newName.name} id="name"
        onChange={handleInput}/>
        <label>Pronunciation </label>
        <input type="text" placeholder='how to pronunce?'
        onChange={handleInput}/>
        <label>Meaning </label>
        <input type="text" placeholder='what is name meaning?'
        onChange={handleInput}/>
        <label>History of name </label>
        <input type="text" placeholder='little bit of history'
        onChange={handleInput}/>
        <button>Submit</button>
      </form>
    </div>
  )
}
