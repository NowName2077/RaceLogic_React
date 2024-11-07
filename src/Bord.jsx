import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './Head/Menu';
import Home from './Body/Home/Home'
import Auto from './Body/Auto/Auto';
import Sport from './Body/Sport/Sport';
import Race from './Body/Race/Rase';
import Info from './Body/Info/Info';
import Ref from './Body/Ref/Ref';
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
                    <Route path='Race' element={<Race/>}/>
                    <Route path='Info' element={<Info/>}/>
                    <Route path='Ref' element={<Ref/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
          
            </>
        );
    }
}
export default Bord;