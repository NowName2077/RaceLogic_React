import React from 'react';
import Slider from './Main/Slider/Slider';
import List from './Main/List/List';
class Sport extends React.Component
{
    render()
    {
        return (
                <main>
                {/* Слайдер  */}
                <Slider />
                {/* Марки  */}
                <List />
                {/* Меню  */}
          
                </main>
        )
    }
}
export default Sport;