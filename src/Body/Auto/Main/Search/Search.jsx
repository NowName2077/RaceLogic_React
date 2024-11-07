import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import './Search.css';

export default function Search() 
{
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);

    const brands = 
    [
        { label: 'BMW', value: 'BMW' },
        { label: 'Audi', value: 'Audi' },
        { label: 'Mercedes', value: 'Mercedes' }
    ];

    const models = 
    {
        BMW: 
        [
            { label: 'X5', value: 'X5' },
            { label: 'X6', value: 'X6' }
        ],
        Audi: 
        [
            { label: 'A4', value: 'A4' },
            { label: 'Q7', value: 'Q7' }
        ],
        Mercedes: 
        [
            { label: 'C-Class', value: 'C-Class' },
            { label: 'E-Class', value: 'E-Class' }
        ]
    };


    
    const handleBrandChange = (e) => {
        setSelectedBrand(e.value);
        setSelectedModel(null);  // сброс модели при изменении марки
    };

    const handleButtonClick = () => {
        // Выводим информацию о выбранной марке и модели
        if (selectedBrand && selectedModel) {
            alert(`Вы выбрали марку: ${selectedBrand} и модель: ${selectedModel}`);
        } else {
            alert("Пожалуйста, выберите марку и модель.");
        }
    };



    return (
        <div className="card">
            <div className="p-field">
                <label htmlFor="brand">Марка</label>
                <Dropdown 
                    id="brand"
                    value={selectedBrand} 
                    onChange={handleBrandChange} 
                    options={brands} 
                    optionLabel="label" 
                    placeholder="Выберите марку" 
                    className="p-dropdown"
                />
            </div>

            <div className="p-field">
                <label htmlFor="model">Модель</label>
                <Dropdown 
                    id="model"
                    value={selectedModel} 
                    onChange={(e) => setSelectedModel(e.value)} 
                    options={selectedBrand ? models[selectedBrand] : []} 
                    optionLabel="label" 
                    placeholder="Выберите модель" 
                    className="p-dropdown"
                    disabled={!selectedBrand} 
                />
            </div>

            <button onClick={handleButtonClick}>Показать</button>

            {selectedBrand && selectedModel && (
                <div className="selected-info">
                    Вы выбрали марку: {selectedBrand}, модель: {selectedModel}
                </div>
            )}
        </div>
    );
}
