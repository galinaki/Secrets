import React from 'react'
import { addNewName } from '../services/apiConfig'
import { useState } from 'react'

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
      <h2> form here</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder='type name'
        value={newName.name} id="name"
        onChange={handleInput} />
        <br />
        <label>Pronunciation </label>
        <input type="text" placeholder='how to pronunce?' 
        value={newName.pronunciation} id='pronunciation'
        onChange={handleInput} />
        <br />
        {/* <label>Meaning </label>
        <input type="text" placeholder='what is name meaning?'
        onChange={handleInput} />
        <br />
        <label>History of name </label>
        <input type="text" placeholder='little bit of history'
        onChange={handleInput} /> */}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
