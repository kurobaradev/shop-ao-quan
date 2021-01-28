import React, { Component } from 'react';
import Products from '../Products';


export default class sideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          product: null,
        };
      }s
    render() {
        return (
            <div>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Products.image} alt="" width="1100" height="500"></img>
                        </div>

                        <div className="carousel-item">
                            <img src={Products.image} alt="" width="1100" height="500"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={Products.image} alt="" width="1100" height="500"></img>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        );
    }
}

