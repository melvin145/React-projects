import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import {Container} from './components/Container';
import { Notepage } from './pages/Notepage';
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' exact  element={<Container/>}/>
      <Route path='/note/:id' element={<Notepage/>}/>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
