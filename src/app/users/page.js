'use client'
import React from 'react'
import { Provider} from 'react-redux'
import DisplayTable from '../components/DisplayTable'

export default function Page() {
    return (
    <Provider>
      <DisplayTable />
    </Provider>
  )
}
