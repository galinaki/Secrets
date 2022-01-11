import React from 'react'
import { useState, useEffect } from 'react'
import fetchStars from '../services/apiConfig'

export default function Stars() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const fetchStars = async () => {
      console.log(fetchStars())
      setStars(await fetchStars())
    }
    fetchStars()
  }, [])

  return (
    <div>
      <h1>Starsssss </h1>
    </div>
  )
}
