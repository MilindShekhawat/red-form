import React from 'react'
import { useSelector } from 'react-redux'
import  style  from '@/app/page.module.css'

function DisplayTable() {
    const users = useSelector((state) => state.users)
    console.log(users); 

  return (
    <div className={style.userContainer}>
            {users.map((user) => (
            <div className={style.users} key={users.indexOf(user)}>
              <div><div>Name:     </div>{user.firstName + ' '}{user.middleName + ' '}{user.lastName}</div>
              <div><div>Address:  </div>{user.address + ','}</div>
              <div><div>City:     </div>{user.city + ','}</div>
              <div><div>State:    </div>{user.state + ','}</div>
              <div><div>Country:  </div>{user.country}</div>
              <div><div>Pin Code: </div>{user.pincode}</div>
              <div><div>Phone:    </div>{user.phone}</div>
              <div><div>Email:    </div>{user.email}</div>
            </div>
        ))}
    </div>
  )
}

export default DisplayTable