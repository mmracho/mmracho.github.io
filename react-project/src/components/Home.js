import React, { Component } from 'react';
import './Home.css';
import imgBanner from './img/DSCF1009_crop.JPG';
import imgProfile from './img/export-5080.jpg';
import textFile from './intro.txt'

class Home extends Component {
    render = () => (
        <body>
            <div id='banner' className='cBanner'>
                <div className='split'>
                    <div className='left'>
                        <img src={imgProfile}></img>
                    </div>
                    <div className='right'>
                        <h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum mauris ante, ac ullamcorper mauris lacinia in. Nullam non nisi et leo iaculis condimentum. Vestibulum egestas nisi tempor ipsum commodo ullamcorper. Curabitur velit risus, mattis vel sollicitudin ac, faucibus non magna. Suspendisse bibendum elit sed nisl condimentum, quis interdum dui facilisis. Donec nec gravida turpis.
                        </p>
                    </div>
                </div>
            </div>
            <div id='body' className='cnameHome'>
            </div>
            <div id='banner' className='cBanner2'>
            </div>
        </body>
    )
}

export default Home;