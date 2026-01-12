import React, { useContext, useState } from 'react'
import ListItem from './ListItem'
import TransactionContext from '../context/TransactionContext'

const ListGroup = () => {

  const {transactions} = useContext(TransactionContext)
  return (
    <>
      <ul className='my-4'>
       {
       transactions.map((transaction) => {
        return(
           <ListItem transaction={transaction}  key={transactions.id}  />
        )
       })
       }
           
        </ul>
    </>
  )
}

export default ListGroup
