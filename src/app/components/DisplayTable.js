import React from 'react'
import { useSelector } from 'react-redux'

function DisplayTable() {
    const users = useSelector((state) => state.user)
    console.log(users);

  return (
    <>
        {users.map((user) => (
            <>
            {user.firstName}
            {user.lastName}
            </>
        ))}
    </>
  )
}

export default DisplayTable