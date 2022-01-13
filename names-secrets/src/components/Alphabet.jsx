import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getNames } from '../services/apiConfig'


export default function Alphabet() {
  const [names, setNames] = useState([])

  useEffect(() => {
    const fetchNames = async () => {
      await getNames()
      setNames(getNames())
      // console.log(getNames())
    }
    fetchNames()
  }, [])



  return (
    <div className="compDiv">
    <h1>Choose name</h1>
      <ul className="list">
        {names.filter((value, index)=>names.indexOf(value)===index)}

        
        {/* {names.map((name) => {
          // if(name.fields.name.charAt(0)!=="G"){
          return (
            <li key={name.id} className='nameList'>
              <Link className='linkNamesList' to={`/namesByLetter/${name.fields.name.charAt(0)}`}>
                {name.fields.name.charAt(0)}
              </Link>
            </li>
          )
        // }
        })} */}
      </ul>
  </div>
  )
}
