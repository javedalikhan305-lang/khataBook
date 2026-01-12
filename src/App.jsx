import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Dashboard from './component/Dashboard'
import ListGroup from './component/ListGroup'
import Form from './component/Form'
import AddBtn from './component/AddBtn'

const App = () => {

  return (
    <>
      <Navbar />
      <div className='p-8 relative'>
        <Dashboard />
        <Form />
        <ListGroup />
        <AddBtn />
      </div>
    </>
  )
}

export default App
