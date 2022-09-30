import './App.css';
import image from './picture.jpg'
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div>
    <div className='picture' >
    <img className='back' src={image} alt="back"/>
    </div>
    <div className='container'>
      <div className='list'>
      <h1>TO DO LIST</h1>
      <ToDoList/>
      </div>
    </div>
    </div>
  );
}

export default App;
