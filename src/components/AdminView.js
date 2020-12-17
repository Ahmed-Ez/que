import React, { Component } from 'react'

import processImage from '../resources/process.png'
import providerImage from '../resources/provider.png'
import queueImage from '../resources/queue.png'
import stationImage from '../resources/station.jpg'

export class AdminView extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-3">
                    <div class="card"   >
                        <img src={processImage} class="card-img-top img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Processes</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>   
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="card"   >
                        <img src={providerImage} class="card-img-top img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Providers</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="card"   >
                        <img src={stationImage} class="card-img-top img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Stations</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="card" >
                        <img src={queueImage} class="card-img-top img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Queues</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div> 
                </div>
                </div>
            </div>  
        )
    }
}

export default AdminView