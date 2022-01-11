import React from 'react'
import { useState, useEffect } from 'react'
import { getStars, getNamesDetails } from '../services/apiConfig'
import { Link, useParams } from 'react-router-dom'



export default function Stars() {
  const [stars, setStars] = useState([])
  // const [name, setName] = useState({})
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
  // useEffect(() => {
  //   const fetchNames = async () => {
  //     const res = await getNamesDetails(`${id}`)
  //     const detail=  res.records.find(record => {
  //       return record.id === id
  //     })
  //       setName(detail)
  //   }
  //   fetchNames()
  // }, [])

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
      <Link to={`"/names/:id"`} >Back to name</Link>
    </div>
  )
}
