import React from 'react'
import '../App.css'
export function Recept({title, img, ingredients}) {
    return(<div className="content-main">
        <div className="text-content">
        <p>{title}</p>
            <ul>
                {
                    ingredients.map(e=> (<li>{e.text}</li>))
                }
            </ul>
        </div>
        <div className="img_content">
            <img src={img} alt=""/>
        </div>
    </div>)
}