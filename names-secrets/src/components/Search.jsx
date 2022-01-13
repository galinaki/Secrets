import React, { useState, useEffect } from 'react'
import { getNames } from '../services/apiConfig'
import NamesList from './NamesList'

export default function Search() {
  const [names, setNames] = useState([])
  const [searchInput, setSearchInput] = useState([])

  useEffect(() => {
    const fetchNames = async () => {
      console.log(getNames())
      setNames(await getNames())
      console.log(names)
    }
    fetchNames()
  }, [])

  const search = (names) => {
    return names.filter(name=>name.fields.name.toLowerCase().indexOf(searchInput)>-1)
    }

  

  return (
    <div>
      <input className='search' type="text" value={searchInput}
        placeholder='Search by name, just type'
      onChange={(e)=>setSearchInput(e.target.value)} />
      <button>Find</button>
      <br />
      Name here
    </div>
  )


}
