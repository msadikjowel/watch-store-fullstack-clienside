import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import AllServices from './Pages/Home/AllServices/AllServices';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Profile from './Pages/Profile/Profile';
import NotFound from './Pages/NotFound/NotFound';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
});

function App() {


  return (
    <ThemeProvider theme={theme}>

      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/allServices'>
              <AllServices></AllServices>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/profile'>
              <Profile></Profile>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>

            <PrivateRoute path='/purchase/:id'>
              <Purchase></Purchase>
            </PrivateRoute>

            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>



          </Switch>
        </Router>
      </AuthProvider>

    </ThemeProvider>
  );
}

export default App;
