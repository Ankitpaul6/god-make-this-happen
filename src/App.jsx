import './App.css';

import { Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Homelayout from './Layouts/Homelayout';
import Homepage from './Pages/HomePage';

function App() {


  return (
    <>
      <Routes>
      {<Route path="/" element={<Homepage />} ></Route>}
      </Routes>
    {/* <Homelayout/> */}
 
       </>
  )
}

export default App
