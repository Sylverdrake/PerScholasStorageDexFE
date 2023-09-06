import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//Components
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Item from './pages/Item'


function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">

      <BrowserRouter>

    <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path='/' element={user ? <Home/> : <Navigate to="/login"/>}/>
          <Route path='/:id' element={<Item/>}/>

          <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
          <Route path='/signup' element={!user ? <SignUp/> : <Navigate to='/'/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
