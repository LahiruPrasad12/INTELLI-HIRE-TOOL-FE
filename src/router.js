import React from 'react';

import Auth_routes from './routes/auth_routes'
import Dashboard_Routes from './routes/dashboard_routes'
import Test from './routes/test_routes'

const Routers = () => {
    return (
        <div>
            <Auth_routes />
            <Dashboard_Routes />
            {/* <Test /> */}
        </div>
    );
};

export default Routers;