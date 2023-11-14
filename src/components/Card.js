import React from "react"
import star from "./images/star.png"
import katieImage from "./images/katie-zaferes.png"
import weddingImage from "./images/wedding-photography.png"
import mountainBikeImage from "./images/mountain-bike.png"


const imageMap = {
    "katie-zaferes.png": katieImage,
    "wedding-photography.png": weddingImage,
    "mountain-bike.png": mountainBikeImage,
};

function Card(props){
    const image = imageMap[props.img];

    return (
        <div className="card">
            {}
            <img src={image} className="card--image" alt="Card cap" /> 
            <div className="card--stats">
                <img src={star} className="card--star" alt="Rating star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card
