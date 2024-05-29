
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Service from './Pages/Services';
import { Services } from './components/Data';



function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/:serviceId" element={<Service />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
