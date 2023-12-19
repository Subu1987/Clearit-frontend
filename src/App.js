import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';



function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin' element={<AdminLogin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
