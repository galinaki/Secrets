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
    <div className='compDiv'>
      <h1>Starsssss </h1>
      <ul className='list2'>
      {stars.map((star) => {
        return (
          <li className='starList' key={star.id}>
            <img className='starImage' src={star.fields.image} />
            <h2 >{star.fields.firstName} {star.fields.lastName}</h2>
            <h3 >{star.fields.about}</h3>
          </li>
        )
        })}
      </ul>
      <Link className='link' to="/names/stars/new">Add more famouse people</Link>
    </div>
  )
}
