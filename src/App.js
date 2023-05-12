import React, { useState } from 'react'
import './App.css'
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([])
  

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal))
  }

  return (
  <div className="course-goals">
    <h2> Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  )
}

export default App
