import React, {useState}from 'react'
import { RiMenu5Fill } from "react-icons/ri"
import { MdClose } from "react-icons/md"
import Navbar from './Navbar'

export default function Menu() {
  const [open, setOpen] = useState(false)

  const openIcon = <RiMenu5Fill size="60px" color='lightsalmon' onClick={() => setOpen(!open)} />

  const closeIcon = <MdClose className="menuIcon" size="60px" color='lightsalmon' onClick={() => setOpen(!open)} /> 

  return (
    <div className='menu'> 
      <br/>
      {open ? closeIcon: openIcon}
      {open && <Navbar />}
    </div>
  )
}
