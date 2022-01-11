import axios from "axios"
// import { useParams } from "react-router-dom"

const BASE = process.env.REACT_APP_AIRTABLE_BASE
const KEY = process.env.REACT_APP_AIRTABLE_KEY

const baseURL = `https://api.airtable.com/v0/${BASE}/secrets/`
const secondURL = `https://api.airtable.com/v0/${BASE}/stars/`

const api = axios.create({
  baseURL,
  headers: {
    "Authorization": `Bearer ${KEY}`
  }
})

export const getNames = async () => {
  try {
    const res = await api.get("?sort%5B0%5D%5Bfield%5D=name")
    return res.data.records
  } catch (error) {
    throw error
  }
}

export const getNamesDetails = async () => {
  try {
    const res = await api.get()
    // console.log(res.data)
    return res.data
    
  } catch (error) {
    throw error
  }
}

export const addNewName = async (fields) => {
  try {
    await api.post("", { fields })
    return true
  } catch (error) {
    throw error
  }
} 

export const deleteName = async () => {
  await api.delete()
}
/////////
const api2 = axios.create({
  secondURL,
  headers: {
    "Authorization": `Bearer ${KEY}`
  }
})

export const fetchStars = async () => {
  try {
    const res = await api2.get("?sort%5B0%5D%5Bfield%5D=name")
    return res.data.records
  } catch (error) {
    throw error
  }
}