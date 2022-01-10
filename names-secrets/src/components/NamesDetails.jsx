import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {  getNamesDetails } from '../services/apiConfig'

export default function NamesDetails() {
  const [name, setName] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const fetchNames = async () => {
      // console.log(getNamesDetails())
      const res = await getNamesDetails(`${id}`)
      const detail=  res.records.find(record => {
        return record.id === id
      })
        setName(detail)
    }
    fetchNames()
  }, [])

  // const handleDelete = async () => {
  //   const del = await deleteName(`${id}`)
  //   const delName = del.data.filter((rem) => name.id !== id)
  //   setName(delName)
  // }

  return (
    <div>
      <h1>{name.fields?.name}</h1>
      <h3>{name.fields?.pronunciation}</h3>
      <h2>{ name.fields?.meaning}</h2>
      <h2>{name.fields?.history}</h2>
      <Link to="/names">Back to list</Link>
      <br />
      <br />
      {/* <button onClick={()=>handleDelete(name.id)} >Delete</button> */}
    </div>
  )
}
