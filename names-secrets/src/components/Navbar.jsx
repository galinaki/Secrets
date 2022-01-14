import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <div className='navbar'>
      <Link className='navbarList' to="/" onClick={()=>props.isMobile && props.closeMenuMobile()} >Home page</Link>
      <Link className='navbarList' to="/names" onClick={()=>props.isMobile && props.closeMenuMobile()} >List of names</Link>
      <Link className='navbarList' to="/search" onClick={()=>props.isMobile && props.closeMenuMobile()} >Search</Link>
      <Link className='navbarList' to="/namesByLetter" onClick={()=>props.isMobile && props.closeMenuMobile()} >Alphabet search</Link>
      <Link className='navbarList' to="/new" onClick={()=>props.isMobile && props.closeMenuMobile()} >Add a new name</Link>
      <Link className='navbarList' to="/names/stars" onClick={()=>props.isMobile && props.closeMenuMobile()} >Celebrities</Link>
        <Link className='navbarList' to="/names/stars/new" onClick={()=>props.isMobile && props.closeMenuMobile()} >Add a new star</Link>
    </div>
  )
}
