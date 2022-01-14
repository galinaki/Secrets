import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link className='navbarList' to="/" >Home page</Link>
      <Link className='navbarList' to="/names">List of names</Link>
      <Link className='navbarList' to="/search">Search</Link>
      <Link className='navbarList' to="/namesByLetter">Alphabet search</Link>
      <Link className='navbarList' to="/new">Add a new name</Link>
      <Link className='navbarList' to="/names/stars">Celebrities</Link>
      <Link className='navbarList' to="/names/stars/new">Add a new star</Link>
    </div>
  )
}
