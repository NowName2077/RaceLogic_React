import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Menu from './Head/Menu';
import Home from './Body/Home/Home'
import Auto from './Body/Auto/Auto';
import Sport from './Body/Sport/Sport';

class Bord extends React.Component
{
    render()
    {
        return (
            <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Menu/>}>
                    <Route index element={<Home/>}/>
                    <Route path='Sport' element={<Sport/>}/>
                    <Route path='Auto' element={<Auto/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
          
            </>
        );
    }
}
export default Bord;