import React, {useState}from 'react'
import { RiMenu5Fill } from "react-icons/ri"
import { MdClose } from "react-icons/md"
import Navbar from './Navbar'

export default function MenuMobile() {
  const [open, setOpen] = useState(false)

  const openIcon = <RiMenu5Fill size="30px" color='lightsalmon' onClick={() => setOpen(!open)} />

  const closeIcon = <MdClose className="menuIcon" size="30px" color='lightsalmon' onClick={() => setOpen(!open)} /> 

const closeMenuMobile = () =>setOpen(false)

  return (
    <div className='menuMobile'>
      {open ? closeIcon: openIcon}
      {open && <Navbar isMobile={true} closeMenuMobile={closeMenuMobile} />}
    </div>
  )
}