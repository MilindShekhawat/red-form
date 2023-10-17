import React from 'react'
import Link from 'next/link'
import style from '../app/page.module.css'

function Links() {
  return (
    <div style={{display:'flex', gap: '30px'}}>
      <Link className={style.links} href='/'>Form</Link>
      <Link className={style.links} href='/users'>Users</Link>
      </div>
  )
}

export default Links