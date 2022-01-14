import React, {useState}from 'react'
import { GiSundial } from "react-icons/gi"
import {RiMoonClearFill} from "react-icons/ri"
import Navbar from './Navbar'

export default function MenuMobile() {
  const [open, setOpen] = useState(false)

  const openIcon = <GiSundial  size="50px" color='lightsalmon' onClick={() => setOpen(!open)} />

  const closeIcon = <RiMoonClearFill className="menuIcon" size="50px" color='lightsalmon' onClick={() => setOpen(!open)} />

const closeMenuMobile = () =>setOpen(false)

  return (
    <div className='menuMobile'>
      {open ? closeIcon: openIcon}
      {open && <Navbar isMobile={true} closeMenuMobile={closeMenuMobile} />}
    </div>
  )
}