import './App.css'
import Header from '../components/Header'
import ToDoEditor from '../components/ToDoEditor'
import ToDoList from '../components/ToDoList'

function App() {

  return (
    <div className='App'>
      <Header />
      <ToDoEditor />
      <ToDoList />
    </div>
  )
}

export default App
