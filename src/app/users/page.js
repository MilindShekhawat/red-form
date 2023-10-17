'use client'
import DisplayTable from '@/components/DisplayTable'
import React from 'react'
import Links from '@/components/Links'
import { Provider } from 'react-redux'
import { store } from '../store'


export default function Page() {
    return (
    <Provider store= {store}>
      <Links />
      <DisplayTable />
    </Provider>
  )
}
