import Todo from './components/todo'
import './App.css'

function App() {
  //in mobile è più bello
  return (
  <div className="App">
    <Todo itemLength={16}/>
    <Todo itemLength={32}/>
    <Todo/>
  </div>
  )
}

export default App
