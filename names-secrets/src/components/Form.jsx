import React from 'react'
import { addNewName } from '../services/apiConfig'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
  const navigation = useNavigate()
  const [newName, setNewName] = useState({
    name: "",
    meaning: "", 
    pronunciation: "",
    history: ""
  })
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    await addNewName(newName)
    navigation("/names")
  }

  const handleInput = (e) => {
    const { id, value } = e.target
    setNewName((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }
  return (
    <div className='form'>
      <h2>Add an another name here</h2>
      <form onSubmit={handleSubmit} >
        <label>Name</label>
        <br />
        <input className='input' type="text" placeholder='type name' value={newName.name} id="name" onChange={handleInput} />
        <br />
        <label>Pronunciation </label>
        <br />
        <input className='input' type="text" placeholder='how to pronunce?' id='pronunciation' value={newName.pronunciation} onChange={handleInput} />
        <br />
        <label>Meaning </label>
        <br />
        <input className='input' type="text" placeholder='what is name meaning?' onChange={handleInput} id='meaning' value={newName.meaning}/>
        <br />
        <label>History of name </label>
        <br />
        <textarea className='input' rows="5" placeholder='little bit of history' onChange={handleInput} id='history' value={newName.history} style={{ height: "100px" }} rows="4" />
        <br />
        <br />
        <button className="submit" >Submit</button>
      </form>
    </div>
  )
}
