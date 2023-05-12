import React, { useState } from 'react'
import './GoalList.css'

const GoalList = ({ goals }) => {
  const [showInput, setShowInput] = useState(false);
  const toggleInput = () => {
    console.log(showInput)
    setShowInput(! showInput)
  }
  
  return (
    <ul className="goal-list">
      { goals.map((goal) => {
        return <li key={goal.id} onClick={toggleInput}>
          { showInput ? <input type="text" value={goal.text} /> : goal.text }
          </li>
      }) }
    </ul>
  )
}

export default GoalList
