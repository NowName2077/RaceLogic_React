import React from 'react';
import Brands from './Main/Brands/Brands';
import Slider from './Main/Slider/Slider';
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
                </main>
        )
    }
}
export default Home;