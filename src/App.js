import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Biography from './pages/Biography';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import ResponsiveAppBar from './components/Header';
import Menubar from './components/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const pageItems = [{'title': 'About', 'url': "/biography"}, 
                   {'title': 'Projects', 'url': "/portfolio"}, 
                   {'title': 'Contact', 'url': "/contact"}];


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

function App() {
  const isMobile = useMediaQuery(defaultTheme.breakpoints.down("md"));
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {isMobile ? (
          <Menubar pages={pageItems}/>
        ) : (
        <ResponsiveAppBar pages={pageItems}/>
        )}
        <Router>
          <div>
            <Routes>
              <Route path="" element={<Home />}  />
              <Route path="/biography" element={<Biography />} />
              <Route path="/portfolio" element={<Portfolio />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </Router>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Cheers to a bright future ahead...
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </div>
  );
}

export default App;
