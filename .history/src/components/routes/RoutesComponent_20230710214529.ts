import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { APP_URL } from '../config/constants';
import { MultiRoutes } from '../../interfaces/interfaces';
import { LANDING_PAGE_ROUTE } from './routes';

const Main = React.lazy(() => import('../Main'));
const RoutesComponent = () => {
    const { location } = window;
    return (
        <Router>
            <Routes>
                <Route path={LANDING_PAGE_ROUTE} element={<Main />} />
                <Route path="*" element={<Main />} />
            </Routes>
        </Router>
    );
};
export default RoutesComponent;
