import React from 'react';
import'./List.css';
class List extends React.Component
{
    render()
    {
        return (
            <>
        <table class="List">
            <tr>
                <th class="Font Button"><text>STI</text></th>
                <th class="Font Button"><text>Mugen Motorsports </text></th>
                <th class="Font Button"><text>NISMO</text></th>
                <th class="Font Button"><text>Mazdaspeed</text></th>
            </tr>
            <tr>
                <th class="Font Button"><text>M-Technik</text></th>
                <th class="Font Button"><text>GR/TRD</text></th>
                <th class="Font Button"><text>Mercedes-AMG</text></th>
                <th class="Font Button"><text>Audi Sport</text></th>
            </tr>
            <tr>
                <th class="Font Button"><text>RENAULT SPORT TECHNOLOGIES</text></th>
                <th class="Font Button"><text>Peugeot Sport</text></th>
                <th class="Font Button"><text>SVT</text></th>
                <th class="Font Button"><text>Mitsubishi Motorsport & Ralliart</text></th>
            </tr>
        </table>
                </>
        )
    }
}
export default List;