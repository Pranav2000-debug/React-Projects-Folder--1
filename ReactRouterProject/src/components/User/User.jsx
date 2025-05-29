import React from 'react'
// For dynamic routing a hook is used called useParams
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams();
  return (
    <div className='bg-orange-500 text-black text-3xl text-center'>User: {userId}</div>
  )
}

export default User