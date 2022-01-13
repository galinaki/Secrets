import React, { useState, useEffect } from 'react'
import { getNames } from '../services/apiConfig'
import NamesList from './NamesList'

export default function Search() {
  const [names, setNames] = useState([])
  const [searchInput, setSearchInput] = useState([])

  useEffect(() => {
    const fetchNames = async () => {
      setNames(await getNames())
    }
    fetchNames()
  }, [])

  // name = input.value
  // names.filter(oneNAme=>oneNAme.name===name)

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
      <br />
      Name here
    </div>
  )


}
