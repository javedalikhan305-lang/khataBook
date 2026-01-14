import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const Dashboard = () => {

  const {transactions, theme , dispatch} = useContext(TransactionContext)

let income = transactions
.filter(transaction => transaction.amount > 0)
.reduce((acc , transaction) => acc + transaction.amount, 0)
// console.log(income)
let Expence = transactions
.filter(transaction => transaction.amount < 0)
.reduce((acc , transaction) => acc + transaction.amount, 0)

let Balance = transactions
.reduce((acc , transaction) => acc + transaction.amount, 0)

  return (
    <>
    <button onClick={() => dispatch({type : "CHANGE_THEME"})} className= {theme ? " my-4 -mt-10 cursor-pointer font-bold hover:bg-gray-100  bg-white py-2 px-4 rounded text-black" : " my-4 -mt-10 cursor-pointer font-bold hover:bg-gray-800  bg-black py-2 px-4 rounded text-white"} > {theme ? "Light mod ☀️"  :" Dark mod 🌙" }</button>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-blue-900 p-4'>
           <h2 className='text-2xl font-bold text-white'>Income :</h2>
           <h1 className='text-4xl my-2 font-bold text-white'>{income}</h1>
        </div>
         <div className='bg-red-800 p-4'>
             <h2 className='text-2xl font-bold text-white'>Expense :</h2>
           <h1 className='text-4xl my-2 font-bold text-white'>{Expence}</h1>
         </div>
          <div className='bg-gray-600 p-4'>
             <h2 className='text-2xl font-bold text-white'>Balance :</h2>
           <h1 className='text-4xl my-2 font-bold text-white'>{Balance}</h1>
          </div>
      </div>
    </>
  )
}

export default Dashboard
