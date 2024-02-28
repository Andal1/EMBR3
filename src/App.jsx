import React,{useState} from 'react'
import './App.css';


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import SideMenu from './Components/SideBar/SideMenu'
import { Switch } from 'react-router-dom';
import Home from './Components/SidebarMenu/Home/Home.jsx';
import ProductList from './Components/SidebarMenu/ProductList/ProductList.jsx';
import OralSyruptabs from './Components/BMR/OralSyrup/OralSyruptabs.jsx';
import Login from './Components/Login/Login.jsx';

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    
    <div className="App">
      <Router>

      <SideMenu onCollapse={(inactive) =>{
        console.log(inactive);
        setInactive(inactive);

      }}/>
      
      <div className={`container ${inactive ? 'inactive': ""}`}>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/OralSyruptabs'} element={<OralSyruptabs/>}/>
        <Route path={'/ProductList'} element={<ProductList/>}/>
      </Routes>
      </div>
    </Router>
      </div>
         
  );
}
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
export default App;
