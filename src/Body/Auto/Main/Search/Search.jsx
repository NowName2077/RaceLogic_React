import React from 'react';
class Search extends React.Component
{
    render()
    {
        return (
            <div>
                <input readonly placeholder="Марка"></input>

                <input readonly placeholder="Модель"></input>

                <button> показать </button>
            </div>

        )
    }
}
export default Search;