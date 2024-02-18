import './App.css';
import Main from './components/mainComponent';
import { BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Main/> 
      </BrowserRouter>
       
      

    </div>
  );
}

export default App;
