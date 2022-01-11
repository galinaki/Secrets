import React from 'react'
import { addStars } from '../services/apiConfig'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddStar() {
  const navigation = useNavigate()
  const [newStar, setNewStar] = useState({
    firstName: "",
    lastName: "", 
    about: "",
    image: ""
  })
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    await addStars(newStar)
    navigation(`/names/stars/${newStar.firstName}`)
  }

  const handleInput = (e) => {
    const {id, value} = e.target
    setNewStar((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  return (
    <div>
      <h2>Add a famous person with same name as yours</h2>
      <form onSubmit={handleSubmit}>
        <label>First name</label>
        <br />
        <input type="text" placeholder='type first name'
        id='firstName' value={newStar.firstName} onChange={handleInput} />
        <br />
        <label>Last name</label>
        <br />
        <input type="text" placeholder='type last name'
        id='lastName' value={newStar.lastName} onChange={handleInput} />
        <br />
        <label>Info</label>
        <br />
        <textarea type="text" placeholder='tell us about this person'
          rows={8} id='about' value={newStar.about} onChange={handleInput} />
        <br />
        <label>Photo</label>
        <br />
        <input type="text" placeholder='past link of photo'
        id='image' value={newStar.image} onChange={handleInput} />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}
