import React from 'react'
import '../App.css'
export function Recept({title, img, ingredients, callories}) {
    return(<div className="content-main">
        <div className="text-content">
        <p>{title}</p>
            <div className="content-in">
            <div className="ingred">
            <ul>
                {
                    ingredients.map(e=> (<li>{e.text}</li>))
                }
            </ul>
            </div>
            <div className="description">
                <p>{callories.toFixed(2)}</p>
            </div>
            </div>
        </div>
        <div className="img_content">
            <img src={img} alt=""/>
        </div>
    </div>)
}