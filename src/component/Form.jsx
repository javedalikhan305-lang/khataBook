import React, { useContext, useEffect, useState } from 'react'
import TransactionContext from '../context/TransactionContext'

const Form = () => {

  const {showModal ,edit , dispatch } = useContext(TransactionContext)



const [text ,setText] = useState("")
const [amount ,setAmount] = useState("")

const handleSubmit = (e) =>{
  e.preventDefault()
  
  !edit.isEdit ? 
  // Save transaction 
  dispatch({
    type: "SAVE_TRASACTION",
    payload : {id : crypto.randomUUID() , text,amount: parseInt(amount)}
}):

// update trasaction 
dispatch({
  type : "UPDATE_TRANSACTION",
  payload : {id : edit.transaction.id , text , amount: parseInt(amount)}
})


  // console.log(addTransaction)
  setAmount("")
  setText("")
}
useEffect(() => {
setText(edit.transaction.text)
setAmount(edit.transaction.amount)
},[edit])


  return (
    <>
    
    <div className={showModal ? ' absolute z-10 top-5 left-0 w-full min-h-screen bg-amber-100 p-8 border border-gray-300' : "hidden"}>
    <form onSubmit={(e) => handleSubmit(e)}  className='my-2  '>
      <h1 className='my-2 text-semibold lext-lg'> Add New Transaction Detail </h1>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} className='border border-gray-300 p-2 w-full my-2 'placeholder='Enter Amount' type="number" />
      <textarea value={text} onChange={(e) => setText(e.target.value)} className='border border-gray-300 p-2 w-full my-2' placeholder='Enter transaction Detail' name="" id=""></textarea>
      <button className='bg-gray-500 hover:bg-green-600 font-semibold w-full p-2 text-white cursor-pointer'>{edit.isEdit ? "Update Transaction" : "Save Transation "}</button>  
      </form> 
        <button onClick={() => dispatch({type : "HANDLE_MODAL"})} className='bg-red-500 w-full  hover:bg-red-600 font-semibold  p-2 text-white cursor-pointer'>Close </button> 
   
     </div>
    </>
  )
}

export default Form
