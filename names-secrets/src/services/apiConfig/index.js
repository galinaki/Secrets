import axios from "axios"

const BASE = process.env.REACT_APP_AIRTABLE_BASE
const KEY = process.env.REACT_APP_AIRTABLE_KEY

const baseURL = `https://api.airtable.com/v0/${BASE}`

const api = axios.create({
  baseURL,
  headers: {
    "Authorization": `Bearer ${KEY}`
  }
})

export const getNames = async () => {
  try {
    const res = await api.get("/secrets/?sort%5B0%5D%5Bfield%5D=name")
    return res.data.records
  } catch (error) {
    throw error
  }
}

export const getNamesDetails = async () => {
  try {
    const res = await api.get("/secrets")
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


export const getStars = async () => {
  try {
    const res = await api.get("/stars")
    return res.data.records
  } catch (error) {
    throw error
  }
}