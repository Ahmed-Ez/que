import React, { Component } from 'react'

import processImage from '../resources/process3.jpg'
import providerImage from '../resources/provider3.jpg'
import queueImage from '../resources/queue3.jpg'
import stationImage from '../resources/station3.jpg'
import { Link } from 'react-router-dom';

export class AdminView extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div className="card-container">
                        <div class="card">
                            <div className="box">
                                <div className="content">
                                    <img src={processImage} class="card-img-top" alt="..." />
                                    <h5 class="card-title">Processes</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/processes"class="btn btn-card">View processes</Link>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                <div className="card-container">
                        <div class="card">
                            <div className="box">
                                <div className="content">
                                    <img src={providerImage} class="card-img-top" alt="..." />
                                    <h5 class="card-title">Providers</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/providers"class="btn btn-card">View providers</Link>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                <div className="card-container">
                        <div class="card">
                            <div className="box">
                                <div className="content">
                                    <img src={stationImage} class="card-img-top" alt="..." />
                                    <h5 class="card-title">Stations</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/stations"class="btn btn-card">View stations</Link>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                <div className="card-container">
                        <div class="card">
                            <div className="box">
                                <div className="content">
                                    <img src={queueImage} class="card-img-top" alt="..." />
                                    <h5 class="card-title">Queues</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/queues"class="btn btn-card">View queues</Link>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                
                </div>
            </div>  
        )
    }
}

export default AdminView
