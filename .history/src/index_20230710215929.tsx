import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CircularProgress, LinearProgress } from '@mui/material';
import muiTheme from './config/muiTheme';

<link rel="preconnect" href="https://fonts.googleapis.com" />;
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />;
<link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
    rel="stylesheet"
/>;
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />;

ReactDOM.render(
      <ThemeProvider theme={muiTheme}>
          <Suspense fallback={<LinearProgress />}>
              <App />
          </Suspense>
      </ThemeProvider>
    ,
    document.getElementById('root') as HTMLElement
);