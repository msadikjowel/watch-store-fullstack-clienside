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

        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
