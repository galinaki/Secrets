import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getNamesDetails } from '../services/apiConfig'

export default function NamesDetails() {
  const [name, setName] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const fetchNames = async () => {
      console.log(getNamesDetails())
      setName(await getNamesDetails())
    }
    fetchNames()
  }, [])

//   useEffect(() => {
//     const fetchNames = async () => {
//       // const res = await getNames(`${id}`)
//       // console.log(res.data)
//       setName(getNames(`${id}`))
//     } 
//     fetchNames()
// }, [])

  return (
    <div>
      <h1>{name.fields?.id}</h1>
      <h1>{name.fields?.name}</h1>
    </div>
  )
}
