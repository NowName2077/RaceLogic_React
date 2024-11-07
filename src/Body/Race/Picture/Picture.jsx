import React from 'react';
import Back from '../../../Image/meme/3.jpg';
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