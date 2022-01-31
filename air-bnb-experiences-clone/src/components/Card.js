import React from 'react';

export default function Card(props) {
  return (
        <div className="card">
            {props.item.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={require(`../images/${props.item.coverImg}`)} alt="" className="card--image"/>
            <div className="card-stats">
            <img src={require("../images/star.png")} alt="star" className="card--star"/>
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount}) * </span>
            <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    );
};
