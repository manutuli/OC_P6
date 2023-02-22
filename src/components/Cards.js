import React from "react";
//
export default function Cards(props) {
    return (
        <div className="card" >
            <div className="title">
                <h3>{props.title}</h3>
            </div>
            <div className="cover">
                <img alt={props.title} src={props.cover} />
            </div>
        </div>
    );
}
