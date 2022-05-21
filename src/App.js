import './App.css';
import Filters from './components/Filters'
import ToDoList from './components/ToDoList'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App container mx-auto">
      <Counter/>
      <ToDoList/>
      <Filters />
    </div>
    
  );
}

export default App