import React from 'react'
import "./style.css"
import entries from "../../portfolio-entries";
import Card from "../Card";

export default function Portfolio() {
    return (
        <div class="col-10">
            <section class="card">
                <h2 class="card-header">Portfolio</h2>
                <div class="card-body">
                    <div class="row">
                        <div class="col d-flex flex-wrap justify-content-around entries-go-here">

                        {entries.map( entry => <Card key={entry.id} title={entry.title} imgURL={entry.imgURL} github={entry.github}/>)}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
