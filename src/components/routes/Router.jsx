import App from 'Components/routes/Grid';
import Detail from 'Components/routes/Detail';
import React from 'react';
import {Route, Switch} from 'react-router-dom';

const Router = () => {
    return <React.Fragment>
        <Switch>
            <Route path='/detail/:id' component={Detail}/>
            <Route component={App}/>
        </Switch>
    </React.Fragment>;
};

export default Router;
