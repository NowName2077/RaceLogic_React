import React from 'react';
import Back from '../../../Image/meme/1.jpg';
import Bac from '../../../Image/meme/4.jpg';
class Picture extends React.Component
{
    render()
    {
        return (
            <div>
            <img class = 'Pikch' src={Back}/>
            <img class = 'Pikch' src={Bac}/>
            </div>
        );
    }
}
export default Picture;