import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress, LinearProgress } from '@mui/material';
import { persistStore } from 'redux-persist';
import muiTheme from './config/muiTheme';
import { store } from './store/store';

<link rel="preconnect" href="https://fonts.googleapis.com" />;
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />;
<link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
    rel="stylesheet"
/>;
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />;

// eslint-disable-next-line import/prefer-default-export
export const persistor = persistStore(store as any);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<CircularProgress />} persistor={persistor}>
      <ThemeProvider theme={muiTheme}>
          <Suspense fallback={<LinearProgress />}>
              <App />
          </Suspense>
      </ThemeProvider>
      </PersistGate>
      </Provider>
    ,
    document.getElementById('root') as HTMLElement
);