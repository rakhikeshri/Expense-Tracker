import React, { useState, useContext } from 'react'
import { ExpenseContext } from '../Contexts/ExpenseContext'

const Header = () => {

    const { income, expense, balance } = useContext(ExpenseContext)

    return (
        <div className='p-2'>
            <h2 className='font-medium text-lg mb-4'>Your Balance: <span className='text-gray-500 font-bold'>Rs.{balance}/-</span></h2>
            <div className='font-semibold grid grid-cols-2 mb-5'>
                <div className='flex text-base'>
                    <h2 className='font-medium'>Income :&nbsp;</h2>
                    <h3 className='font-bold text-green-500'>

                        {
                            income && income + '/-'
                        }
                    </h3>
                </div>
                <div className='flex text-base'>
                    <h2 className='font-medium'>Expense:&nbsp;</h2>
                    <h3 className='font-bold text-red-500'>
                        {
                            expense &&  expense + '/-'
                        }
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Header