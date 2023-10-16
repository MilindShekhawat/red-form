'use client'
import Form from './components/Form'
import { Provider } from 'react-redux'
import { store } from './store'
import DisplayTable from './components/DisplayTable'


export default function Home() {
  return (
    <body>
      <Provider store = {store}>
        <h1>Form</h1>
        <Form />
        <DisplayTable />
      </Provider>
    </body>
  )
}
