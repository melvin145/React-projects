
import './App.css'
import {Navbar} from './components/Navbar';
import {Sidebar} from './components/Sidebar';
import {Home} from './pages/Home'
import { Searched } from './pages/Searched';
import {VideoDetail} from './pages/VideoDetail';
import {Routes,Route} from 'react-router-dom';
function App() {

  return (<>
           <Navbar/>
            <Sidebar/>
           <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/video/:videoid' element={<VideoDetail/>}/>
            <Route path='/search/:query' element={<Searched/>}/>
           </Routes>
          </>
  )
}

export default App
