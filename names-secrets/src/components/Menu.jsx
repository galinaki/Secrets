import React, {useState}from 'react'
import { GiSundial } from "react-icons/gi"
import {RiMoonClearFill} from "react-icons/ri"
import Navbar from './Navbar'

export default function Menu() {
  const [open, setOpen] = useState(false)

  const openIcon = <GiSundial size="60px" color='lightsalmon' onClick={() => setOpen(!open)} />

  const closeIcon = <RiMoonClearFill className="menuIcon" size="40px" color='lightsalmon' onClick={() => setOpen(!open)} />

  return (
    <div className='menu'>
      {open ? closeIcon: openIcon}
      {open && <Navbar />}
    </div>
  )
}