import React, {useState}from 'react'
import {CgMenuCake} from "react-icons/cg"
import Navbar from './Navbar'

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <CgMenuCake className="menuIcon" size="50px" color='coral' onClick={() => setOpen(!open)} />
      {open && <Navbar />}
    </div>
  )
}
