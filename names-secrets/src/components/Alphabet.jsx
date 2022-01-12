import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getNames } from '../services/apiConfig'


export default function Alphabet() {
  const [names, setNames] = useState([])

  useEffect(() => {
    const fetchNames = async () => {
      console.log(getNames())
      setNames(await getNames())
    }
    fetchNames()
  }, [])



  return (
    // <div>
    //   {names.map((name) => {
    //     return (
    //       <Link to="/namesByLetter/:letter">{name.fields.name.charAt(0)}</Link>
    //     )
    //   })}
    // </div>

    <div className="compDiv">
    <h1>Choose name</h1>
      <ul className="list">
        {names.map((name) => {
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
