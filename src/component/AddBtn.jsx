import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const AddBtn = () => {

    const {dispatch} = useContext(TransactionContext)
    return (
        <>
            <button onClick={() => dispatch({type : "HANDLE_MODAL"})} className='  cursor-pointer fixed bottom-5 right-5 bg-black p-2 hover:bg-gray-800 text-white font-semibold '>Add Transaction + </button>
        </>
    )
}

export default AddBtn
