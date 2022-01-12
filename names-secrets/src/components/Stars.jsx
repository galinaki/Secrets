import React from 'react'
import { useState, useEffect } from 'react'
import { getStars, getNamesDetails } from '../services/apiConfig'
import { Link, useParams } from 'react-router-dom'

export default function Stars() {
  const [stars, setStars] = useState([])
  const [person, setPerson] = useState({})
  const { name } = useParams()
  
  console.log(name)

  useEffect(() => {
    const fetchStars = async () => {
      console.log(await getStars())
      const res = await getStars()
      const sameName = res.filter(same => {
        return same.fields.firstName === name 
      })
      console.log(sameName)
      setStars(sameName)
    }
    fetchStars()
  }, [])

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
    <div>
      <ul className='list2'>
      {stars.map((star) => {
        return (
          <li className='starList' key={star.id}>
            <img style={{ width: "150px" }, { height: "150px" }} src={star.fields.image}
              alt={`${ star.fields.firstName },${star.fields.lastName}`}/>
            <h2>{star.fields.firstName} {star.fields.lastName}</h2>
            <h3>{star.fields.about}</h3>
          </li>
        )
        })}
      </ul>
      <Link className='link' to="/names/stars/new">Add more famouse people</Link>
      <Link className='link' to={`/names/${person.id}`} >Back to name</Link>
    </div>
  )
}
