import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { store } from '../src/store/store';
import muiTheme from '../src/config/muiTheme';

const ComponentTest = (Component, route, props) => {
    if (route) {
        return render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <Route path={route}>
                        <ThemeProvider theme={muiTheme}>
                            <Component {...props} />
                        </ThemeProvider>
                    </Route>
                </MemoryRouter>
            </Provider>
        );
    }
    return render(
        <Provider store={store}>
            <ThemeProvider theme={muiTheme}>
                <Component {...props} />
            </ThemeProvider>
        </Provider>
    );
};

export default ComponentTest;
