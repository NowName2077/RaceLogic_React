import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
class Menu extends React.Component
{
    render()
    {
        return (

        <header>
            <span>Rase Logic</span>
            <nav>
                <ul>
                <li>Авто</li>
                <li>Спортивные подразделения</li>
                <li>Гоночные серии</li>
                <li>Инфо</li>
                <li>Справка</li>
                </ul>
            </nav>
        </header>
        );
    }
}
export default Menu;