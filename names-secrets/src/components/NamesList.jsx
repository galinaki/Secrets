import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
      <h1>Choose name</h1>
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
