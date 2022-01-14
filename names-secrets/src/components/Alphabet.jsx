import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getNames } from '../services/apiConfig'


export default function Alphabet() {
  const [names, setNames] = useState([])

  useEffect(() => {
    const fetchNames = async () => {
      setNames(await getNames())
    }
    fetchNames()
  }, [])

  const unique = names.map((n) => {
    return n.fields.name.charAt(0)
  }).map((n, i, final) => final.indexOf(n) === i && i).filter(n=>names[n]).map(n=>names[n])

  return (
    <div className="compDiv">
      <h1>Starts with:</h1>
        <ul className="list">
          {unique.map((name) => {
            return (
              <li key={name.id} className='nameList'>
                <Link className='linkNamesList' to={`/namesByLetter/${name.fields.name.charAt(0)}`}>
                  {name.fields.name.charAt(0)}
                </Link>
              </li>
            )
          })}
        </ul>
  </div>
  )
}
