import './App.css'
import TaskInput from './component/TaskInput'
import TaskList from './component/TaskList'

function App() {

  return (
    <div className='app-container'>
      <TaskInput></TaskInput>
      <TaskList></TaskList>
      </div>
  )
}

export default App
