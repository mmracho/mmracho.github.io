import React, { Component } from "react";
import './css/NavHeader.css';

class Navi extends Component {
    render = () => (
        <nav>
            <div className="cnameNavi">
                    <li><a href="" className="cnameNaviHeader">HOME</a></li>
                    <li><a href="https://github.com/mmracho/mmracho.github.io" className="cnameNaviHeader">ABOUT</a></li>
                    <li><a href="https://github.com/mmracho"  className="cnameNaviHeader">GITHUB</a></li>
            </div>
        </nav>
    );
}

export default Navi;
