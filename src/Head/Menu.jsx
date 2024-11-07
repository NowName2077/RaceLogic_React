import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Menu.css';
class Menu extends React.Component
{
    render()
    {
        return (
        <>
            <header class = 'Head'>
                <span class = 'Icon Font'><Link to = '/' class = 'Font'>Rase Logic</Link></span>
                <nav>
                    <ul class ='Menu'>
                        <li class ='left'><NavLink to = '/Auto' className ='Font Nav'>Авто</NavLink></li>
                        <li class ='left'><NavLink to = '/Sport' className ='Font Nav'>Спортивные подразделения</NavLink></li>
                        <li class ='left'><NavLink to = '/Race' className ='Font Nav'>Гоночные серии</NavLink></li>
                        <li class ='left'><NavLink to = '/Info' className ='Font Nav'>Инфо</NavLink></li>
                        <li class ='right'><NavLink to = '/Ref' className = 'Font Nav'>Справка</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
        );
    }
}
export default Menu;