import { NotFound } from '../../Pages/NotFound/NotFound';
import { Register } from '../../Pages/Register/Register';
import { HOME_PATH, REGISTER_PATH, MENU_PATH } from '../../constants/path';
import { Footer } from '../Footer/Footer';
import '../../Reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '../../Pages/Menu/Menu';
import { Home } from '../../Pages/Home/HomePage/Home';
import { userContext } from './Context';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../../types/user';


export const AuthenticatedRoute = ({ mail }: { mail: string | null }) => {

  const [user, setUser] = useState<User|null>(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    axios.get(`${apiUrl}/getUser?mail=${mail}`).then((response) =>{
      console.log(response.data[0].id)
      setUser(response.data[0])
    })
  }, [mail])

  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Routes >
          <Route path={HOME_PATH} element={ <Home /> } />
          <Route path={REGISTER_PATH} element={ <Register /> } />
          <Route path={MENU_PATH} element={ <Menu /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </userContext.Provider>
  )
}
