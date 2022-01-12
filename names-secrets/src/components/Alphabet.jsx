import React from 'react'
import { Link } from 'react-router-dom'

export default function Alphabet() {
  return (
    <div>
      <Link to="/namesByLetter/:letter">G</Link>
      <Link to="/namesByLetter/:letter">S</Link>
    </div>
  )
}
