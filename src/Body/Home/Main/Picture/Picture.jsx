import React from 'react';
import Back from '../../../../Image/BackGround/Back-Bottom.jpg';
class Picture extends React.Component
{
    render()
    {
        return (
            <div>
            <img class = 'Pikch' src={Back}/>
            </div>
        );
    }
}
export default Picture;