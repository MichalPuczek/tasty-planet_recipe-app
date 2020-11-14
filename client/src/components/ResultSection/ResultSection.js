import React, { useState } from 'react';

import Recipes from '../Recipes/Recipes';
import FiltersBar from '../FiltersBar/FiltersBar';

import styles from './ResultSection.module.css';

const ResultSection = ({ recipes, setDetails }) => {

    // == List of allergienes
    const allergies = ["Gluten", "Sulfites", "Wheat", "Tree-Nuts", "FODMAP"];

    // == State of the filtred receipes
    const [activeFilters, setActiveFilters] = useState([]);

    // == Function updating the state
    const handleUpdateAllergies = (e) => {
        const allergy = e.target.innerText; /* .toUpperCase() */

        if (activeFilters.includes(allergy)) {
            let newState = activeFilters.filter((aller) => {
                return aller !== allergy;
            });
            setActiveFilters(newState);
            console.log("newstate delete", newState);
        } else {
            let newState = activeFilters.concat(allergy);
            setActiveFilters(newState);
            console.log("newstate add", newState);
        }
    };

    return (
        <div className={styles.wrapper}>
            <FiltersBar allergies={allergies} activeFilters={activeFilters} handleUpdateAllergies={handleUpdateAllergies} />
            <Recipes recipes={recipes} setDetails={setDetails} activeFilters={activeFilters} />
        </div>
    );
};

export default ResultSection; 