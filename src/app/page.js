'use client'
import { Provider } from 'react-redux'
import { store } from './store'
import Form from '../components/Form'
import Links from '../components/Links'


export default function Home() {
  return (
    <body>
      <Provider store = {store}>
        <Links />
        <Form />
      </Provider>
    </body>
  )
}
