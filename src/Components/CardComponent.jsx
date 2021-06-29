import React from 'react';

export default function CardComponent (props) {
    return (
        <div className="container animate__bounceIn">
            <div className="container-img">
                <img src={props.url} alt="" />
            </div>
            <div className="container-title-description">
                <div className="title">
                    {props.title}
                </div>
                <div className="description">
                    {props.description}
                </div>
            </div>
        </div>
    );
}
