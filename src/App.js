import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Exams from './containers/exams';
import Contact from './containers/contact';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path ='/home' element ={<Home/>}/>
      <Route path ='/about' element={<About/>}/>
      <Route path ='/exams' element={<Exams/>}/>
      <Route path ='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
