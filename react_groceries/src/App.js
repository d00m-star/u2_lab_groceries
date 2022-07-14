import { useState } from 'react'
import groceryList from './groceryList'
import './App.css'

const App = () => {
  const [groceries, setGroceries] = useState(...groceryList)

  const handleList = () => {
    let purchased = []
    groceryList.forEach((grocery) => {
      if (groceryList.isPurchased === false) {
        purchased = [...purchased, grocery]
        setGroceries(purchased)
      }
    })
  }

  return (
    <div className="App">
      <h3>Shopping List:</h3>
      {groceryList.map((grocery) => (
        <div>
          <p>
            {grocery.quantity} {grocery.units} of {grocery.brand} {grocery.item}
          </p>
          <button
            className="button"
            onClick={() => {
              groceries.isPurchased = true
              handleList()
            }}
          >
            Check Off
          </button>
        </div>
      ))}
    </div>
  )
}

export default App
