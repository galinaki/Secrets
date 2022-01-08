import React, { useEffect, useState } from 'react'
import { getNames } from '../services/apiConfig'

export default function NamesList() {
  const [names, setNames] = useState([])

  useEffect(() => {
    const fetchNames = async () => {
      console.log(getNames())
      setNames(await getNames())
    }
    fetchNames()
  }, [])


  return (
    <div>
      <h1>Names List is here</h1>
        <ul>
          {names.map((name) => {
            return (
              <li key={name.id}>
                {name.fields.name}
              </li>
            )
          })}
        </ul>
    </div>
  )
}
