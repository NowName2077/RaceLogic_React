import React from 'react';
import Menu from './Head/Menu';
import Home from './Body/Home/Home'
import Sport from './Body/Sport/Sport';

class Bord extends React.Component
{
    render()
    {
        return (
            <>
            <Menu />
            <Home />
            <Sport />
          
            </>
        );
    }
}
export default Bord;