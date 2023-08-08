import React from 'react';

import Auth_routes from './routes/auth_routes'
import Dashboard_Routes from './routes/dashboard_routes'

const Routers = () => {
    return (
        <div>
            <Auth_routes />
            <Dashboard_Routes />
        </div>
    );
};

export default Routers;