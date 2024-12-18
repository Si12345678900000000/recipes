import React from "react";
const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card w-50 bg-[#5d6630] m-2 rounded p-2">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image w-full"
            />
            <div className="card-body p-2 text-center">
                <span className="category text-[#1b1f0f]">{strCategory}</span>
                <h3 className="text-white">{strMeal}</h3>
                <a 
                    href={`https://www.themealdb.com/meal/${idMeal}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#9ba353] text-white p-2 rounded mt-2 inline-block"
                >
                    Instructions
                </a>
            </div>
        </div>
    )
};

export default RecipeCard;