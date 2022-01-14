import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { deleteName, getNamesDetails } from '../services/apiConfig' 

export default function NamesDetails() {
  const [name, setName] = useState({})
  const { id } = useParams()
  const navigation = useNavigate()

  useEffect(() => {
    const fetchNames = async () => {
      const res = await getNamesDetails(`${id}`)
      const detail = res.records.find(record => {
        return record.id === id
      })
        setName(detail)
    }
    fetchNames()
  }, [])

  const handleDelete = async () => {
    await deleteName(`${id}`)
    navigation("/names")
  }

  return (
    <div className="compDiv">
      <h1>{name.fields?.name}</h1>
      <h3>{name.fields?.pronunciation}</h3>
      <h2>{ name.fields?.meaning}</h2>
      <h2>{name.fields?.history}</h2>
      <br />
      <Link className='link' to="/names">Back to list</Link>
      <br />
      <br />
      <Link className='link' to={`/names/stars/${name.fields?.name}`}>Click here to see famouse people with this name</Link>
      <button id="delete" className='link' onClick={handleDelete} >Delete</button>
    </div>
  )
}
