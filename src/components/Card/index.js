import React from 'react';
import "./style.css";

export default function Card(props) {
    return (
        <div className="card portfolio-box">
            <h4 className="card-header">{props.title}</h4>
            <a href={`https://github.com/nvanbaak/${props.github}`}>
                <img className="card-img-top" alt={props.title} src={props.imgURL}/>
            </a>
            <p className="card-body">{props.desc}</p>
            <a className="card-footer" href={`https://github.com/nvanbaak/${props.github}`}>Github Repo</a>
            <a className="card-footer" href={`https://nvanbaak.github.io/${props.github}`}>Deployed Link</a>
    
        </div>
    )
}
