import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Menu.css';
class Menu extends React.Component
{
    render()
    {
        return (

        <header class = 'Head'>
            <span class = 'Icon Font'>Rase Logic</span>
            <nav>
                <ul class ='Menu'>
                    <li class ='left Font Nav'>Авто</li>
                    <li class ='left Font Nav'>Спортивные подразделения</li>
                    <li class ='left Font Nav'>Гоночные серии</li>
                    <li class ='left Font Nav'>Инфо</li>
                    <li class ='right Font Nav'>Справка</li>
                </ul>
            </nav>
        </header>
        );
    }
}
export default Menu;