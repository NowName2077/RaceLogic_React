import React from 'react';
import Back from '../../../../Image/BackGround/Back-Bottom.jpg';
import './Picture.css'
class Picture extends React.Component
{
    render()
    {
        return (
            <div>
            <img class = 'Picture' src={Back}/>
            </div>
        );
    }
}
export default Picture;