import React, { useContext, useState } from 'react'
import Navbar from './component/Navbar'
import Dashboard from './component/Dashboard'
import ListGroup from './component/ListGroup'
import Form from './component/Form'
import AddBtn from './component/AddBtn'
import TransactionContext from './context/TransactionContext'

const App = () => {
const {theme } = useContext(TransactionContext)
  return (
    <>
      <Navbar />
      <div className={theme ? " bg-gray-500 p-12 relative " : "p-12 relative bg-white"} >
        <Dashboard />
        <Form />
        <ListGroup />
        <AddBtn />
      </div>
    </>
  )
}

export default App
