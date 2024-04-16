import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>404 not Found</h1>
        <button onClick={()=> navigate(-1)}>Go back</button>
    </div>
  )
}

export default Error