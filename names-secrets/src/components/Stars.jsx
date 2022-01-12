import React from 'react'
import { useState, useEffect } from 'react'
import { getStars, getNamesDetails, deleteStar } from '../services/apiConfig'
import { Link, useParams } from 'react-router-dom'

export default function Stars() {
  const [stars, setStars] = useState([])
  const [person, setPerson] = useState({})
  const { name } = useParams()
  

  useEffect(() => {
    const fetchStars = async () => {
      const res = await getStars()
      const sameName = res.filter(same => {
        return same.fields.firstName === name 
      })
      setStars(sameName)
    }
    fetchStars()
  }, [])

  const handleDelete = async (id) => {
    await deleteStar(id)
    // console.log(deleteStar(`${id}`))
    }

  /////
  useEffect(() => {
    const fetchNames = async () => {
      const res = await getNamesDetails()
      const detail=  res.records.find(record => {
        return record.fields.name.toLowerCase() === name.toLowerCase()
      })
        setPerson(detail)
    }
    fetchNames()
  }, [])
  ///////

  return (
    <div className="compDiv">
      <ul className='list2'>
      {stars.map((star) => {
        return (
          <li className='starList' key={star.id}>
            <img className='starImage' src={star.fields.image}
              alt={`${ star.fields.firstName },${star.fields.lastName}`}/>
            <h2>{star.fields.firstName} {star.fields.lastName}</h2>
            <h3>{star.fields.about}</h3>
            <h2> {star.id}</h2>
            <button id="deleteStar" className='link' onClick={()=>handleDelete(star.id) } >Delete</button>
          </li>
        )
        })}
      </ul>
      <Link className='link' to="/names/stars/new">Add more famouse people</Link>
      <Link className='link' to={`/names/${person.id}`} >Back to name</Link>
      
    </div>
  )
}
