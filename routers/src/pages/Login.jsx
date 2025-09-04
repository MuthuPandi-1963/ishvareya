import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const nav = useNavigate()
    const handleBack = ()=>{
        nav("/")
    }
  return (
    <>
    <h2>Login</h2>
    <button onClick={handleBack}>Back</button>
    </>
  )
}
