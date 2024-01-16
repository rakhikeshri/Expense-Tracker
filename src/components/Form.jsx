import React, { useContext } from 'react'
import { ExpenseContext } from '../Contexts/ExpenseContext'

const Form = () => {


    const { entries, addExpenses, handleChange } = useContext(ExpenseContext)

    return (
        <div className='px-2 pb-2'>
         <h2 className='text-lg font-medium mb-4' >Add your expenses here.</h2>
            
            <form onSubmit={addExpenses}>
                <input className='px-2 py-1 border border-gray-900 mb-2 outline-none w-full' type="text" placeholder='enter title' onChange={handleChange} value={entries.title} name='title' />
                <br />
                <input className='px-2 py-1 border border-gray-900 mb-2 outline-none w-full' type="text" placeholder='enter amount' onChange={handleChange} value={entries.amount} name='amount' />
                <br />
                <input type='submit' value='Add' className='bg-white border outline-none border-black text-black py-1 px-4 hover:bg-black hover:text-white transition-all cursor-pointer' />
            </form>
        </div>
    )
}

export default Form