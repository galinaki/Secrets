import React from 'react'
import { getStars } from '../services/apiConfig'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



export default function AllStars() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const fetchStars = async () => {
      await getStars()
      setStars(await getStars())
    }
    fetchStars()
  }, [])

  return (
    <div>
      <h1>Starsssss </h1>
      <ul>
      {stars.map((star) => {
        return (
          <li className='starList' key={star.id}>
            <img style={{width:"150px"}, {height: "150px"}} src={star.fields.image} />
            <h2 className='starName'>{star.fields.firstName} {star.fields.lastName}</h2>
            <h3>{star.fields.about}</h3>
          </li>
        )
        })}
      </ul>
      <Link to="/names/stars/new">Add more famouse people</Link>
    </div>
  )
}
