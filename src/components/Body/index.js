import React from 'react'
import "./style.css"

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
            {props.currentHome ? <h1>"Homepage"</h1> : <h1>"Portfolio Page"</h1>}
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
