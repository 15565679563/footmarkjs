import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes, Link, Outlet, useParams,Navigate} from 'react-router-dom'
import Home from './components/home/index';
import Hrm from './components/hrm/index';
import HrmList from './components/hrm/HrmList';
import Item from './components/hrm/Item';

class MyRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/"/>} />
                    <Route path="/hrm" element={<Hrm/>}/>
                    <Route path={"/hrm/list"} element={<HrmList/>}/>
                    <Route path={"/hrm/item/:id"} element={<Item/>}/>
                </Routes>
            </BrowserRouter>
        )

    }
}

ReactDOM.render(
    <MyRouter/>,
    document.getElementById('root')
);

