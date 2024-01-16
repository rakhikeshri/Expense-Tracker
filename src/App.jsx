import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import History from './components/History'
import Form from './components/Form'
import { ExpenseContext } from './Contexts/ExpenseContext'

function App() {
  const [history, setHistory] = useState([])
  const [entries, setEntries] = useState({
    title: '',
    amount: ''
  })
  const [income, setIncome] = useState(null)
  const [expense, setExpense] = useState(null)
  const [balance, setBalance] = useState(0)


  const handleChange = (e) => {
    const { name, value } = e.target
    setEntries({
      ...entries,
      [name]: value
    })
  }

  const addExpenses = (e) => {
    e.preventDefault()

    //updating the history
    setHistory([
      ...history,
      entries
    ])

    //updating expense/income
    let amount = Number(entries.amount)
    amount > 0 ? setIncome(income + amount) : setExpense(expense + amount)

    //updating overall balance
    setBalance(balance + amount)

    // empty the input values
    setEntries({
      title: '',
      amount: ''
    })
  }

  return (
    <>
      <h1 className='mb-4 font-bold text-lg'>Expense Tracker</h1>
      <div className='border border-gray-300 font-sans p-2 w-[fit-content] mx-auto text-left min-w-[300px]'>

        <ExpenseContext.Provider value={{ history, setHistory, entries, setEntries, income, setIncome, expense, setExpense, balance, setBalance, addExpenses, handleChange }}>
          <Header />
          <History />
          <Form />
        </ExpenseContext.Provider>

      </div>
    </>
  )
}

export default App
