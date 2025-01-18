import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NavigationTab = ({curYear, setCurYear}) => {

    const years = [2024, 2025, 2026];

    const handleTab = (year) => {
        setCurYear(year)
    }

    return(
        <>
            <div className="tabs">
                {
                    years.map((year, index)=> (
                        <button key={index} className={`tab ${curYear === year ? 'active' : ''}`}  onClick={() => handleTab(year)}>{year}</button>
                    ))
                }
            </div>
        </>
    )
}

export default NavigationTab;