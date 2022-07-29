
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AllTodo } from './components/AllTodo/AllTodo';
import { Inputs } from './components/Inputs/Inputs';




function App() {
  return (
    <div >
      <Inputs></Inputs>
      <AllTodo></AllTodo>
      
    </div>
  );
}

export default App;
