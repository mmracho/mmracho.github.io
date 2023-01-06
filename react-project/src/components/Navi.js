import React, { Component } from 'react';
import './Navi.css';
import MenuItems from './MenuItems';
import { Button } from './Button';

class Navi extends Component 
{
    state = { clicked: false }
    handeleClicked = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render = () => (
    <nav>
        <div className="menuIcon" onClick={this.handeleClicked}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'navStyle active' : 'navStyle' }>
            {
                MenuItems().map((item, index) => {
                    return (
                        <li key={index}><a href={item.getUrl}>{item.getTitle}</a></li>
                    )
                })
            }
        </ul>
        {/* <Button></Button> */}
    </nav>
    );
}


export default Navi;

// 32