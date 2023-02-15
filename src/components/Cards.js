import React from "react";
//
export default function Cards(props) {
    // console.log('--', props.tags)
    return (
        <div className="card">
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="cover">
                {/* <img alt={props.title} src={props.cover} /> */}
            </div>
            <div className="carrousel">{props.pictures}</div>
            <div className="host">
                <span className="name">{props.host.name}</span>
                <div className="image">
                    <img alt={props.title} src={props.host.picture} />
                </div>
                <div className="rating">
                    <span className="stars">{props.rating}</span>
                    <div className="location">
                        <p>{props.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
