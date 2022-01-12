import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getNames, getNamesDetails } from '../services/apiConfig'

export default function NameByLetter() {
  const [names, setNames] = useState([])
  
  const {letter} =useParams()

  useEffect(() => {
    const fetchNames = async () => {
      const res = await getNames()
      const firstLetter = res.filter(first => {
        return first.fields.name.charAt(0) == letter
      })
      setNames(firstLetter)
    }
    fetchNames()
  }, [])




  return (
    <div className="compDiv">
      {/* <h1>Names on Letter {names.charAt(0)}</h1> */}
        <ul className="list">
          {names.map((name) => {
            return (
              <li key={name.id} className='nameList'>
                <Link className='linkNamesList' to={`/names/${name.id}`}>
                  {name.fields.name}
                </Link>
              </li>
            )
          })}
        </ul>
    </div>
  )
}
