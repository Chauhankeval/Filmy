
import './App.css';
import Addmovies from './components/Addmovies';
import Cards from './components/Cards';
import Header from './components/Header';
import Error from './components/Error';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import { createContext, useState } from 'react';
import Login from './components/Login';
import Singup from './components/SignUp'
import { ToastContainer } from 'react-toastify';



const AppState = createContext()
function App() {
  const [login ,setLogin] = useState(false)
  const [userName, setuserName] = useState();
  return (

    <AppState.Provider value={{login , userName ,setLogin ,setuserName}}>

      <div className="App relative">
        <Header />
        <Routes>
          <Route path='/' element={<Cards />}></Route>
          <Route path='/addmovies' element={<Addmovies />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Singup />}></Route>



          <Route path='*' element={<Error />}></Route>


        </Routes>
        <ToastContainer />

      </div>
    </AppState.Provider>
  );
}
export {AppState}
export default App;
