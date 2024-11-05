import React from 'react';
import'./List.css';
class List extends React.Component
{
    render()
    {
        return (
            <>
        <div class="List">

                <div class="Font Button"><text>STI</text></div>
                <div class="Font Button"><text>GR/TRD</text></div>
                <div class="Font Button"><text>NISMO</text></div>
                <div class="Font Button"><text>Mazdaspeed</text></div>

                <div class="Font Button"><text>M-Technik</text></div>
                <div class="Font Button"><text>GR/TRD</text></div>
                <div class="Font Button"><text>Mercedes-AMG</text></div>
                <div class="Font Button"><text>Audi Sport</text></div>

                <div class="Font Button"><text>RENAULT SPORT TECHNOLOGIES</text></div>
                <div class="Font Button"><text>Peugeot Sport</text></div>
                <div class="Font Button"><text>SVT</text></div>
                <div class="Font Button"><text>itsubishi Motorsport & Ralliart</text></div>
        </div>
                </>
        )
    }
}
export default List;