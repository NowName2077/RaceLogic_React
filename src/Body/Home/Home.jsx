import React from 'react';
import Brands from './Main/Brands/Brands';
import Slider from './Main/Slider/Slider';
import Picture from './Main/Picture/Picture';
class Home extends React.Component
{
    render()
    {
        return (
                <main>
                {/* Слайдер  */}
                <Slider />
                {/* Марки  */}
                <Brands />
                {/* Меню  */}
                <Picture />
                </main>
        )
    }
}
export default Home;