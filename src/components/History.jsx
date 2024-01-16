import React, {useContext} from 'react'
import { ExpenseContext } from '../Contexts/ExpenseContext'

const History = () => {

    const { history, balance } = useContext(ExpenseContext)

    return (
        <div className='mb-5 bg-gray-100 p-2'>
            <h2 className='text-lg font-medium mb-1' >History</h2>
            <div className='max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 pr-2'>
                {
                    history && history.map((expense, idx) => {
                        return (
                            <div className={
                                expense.amount > 0
                                    ? 'border-b-green-500 border-b flex justify-between mb-2 pb-1'
                                    : 'border-b border-b-red-500 flex justify-between mb-2 pb-1'
                            } key={idx}>
                                <h3 className='font-bold text-gray-500'>{expense.title}</h3>
                                <h3 className='font-bold text-gray-500'>{expense.amount > 0 ? '+' + expense.amount : expense.amount}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default History