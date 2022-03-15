import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home/index';
import Hrm from './components/hrm/index';
import HrmList from './components/hrm/HrmList';
import Item from './components/hrm/Item';

class MyRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/hrm" component={Hrm}/>
                    <Route exact path={"/hrm/list"} component={HrmList}/>
                    <Route path={"/hrm/item/:id"} component={Item}/>
                    <Route exact  path="/" component={Home}/>
                </Switch>
            </Router>
        )

    }
}

ReactDOM.render(
    <MyRouter/>,
    document.getElementById('root')
);

