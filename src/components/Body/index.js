import React from 'react';
import "./style.css";
import Homepage from "../Homepage";
import Portfolio from "../Portfolio";

export default function Body(props) {
    return (
        <div className="container-xl">
            <div className="row">
                <div className="col">
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            {props.currentHome ? <Homepage/> : <Portfolio/>}
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
