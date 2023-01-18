import React, { Component } from "react";
import './css/Footer.css';

class Footer extends Component {
    render = () => (
        <footer className="cnameFooter">
            <div>
                <p>Author: Martin Racho</p>
                <p>Contact Me: mmracho@gmail.com</p>
                <p>
                    This site uses the
                    <a href="https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project"> JMdict/EDICT </a>
                    and
                    <a href="https://www.edrdg.org/wiki/index.php/KANJIDIC_Project"> KANJIDIC </a>
                    dictionary files.
                    These files are the property of the
                    <a href="https://www.edrdg.org/"> Electronic Dictionary
                        Research and Development Group</a>, and are used in
                    conformance with the Group's
                    <a href="https://www.edrdg.org/edrdg/licence.html"> licence</a>.
                </p>
                <p>
                    JLPT data comes from <a href="http://www.tanos.co.uk/contact/">Jonathan Waller‘s</a> <a href="http://www.tanos.co.uk/jlpt/">JLPT Resources</a> page.
                </p>
            </div>
        </footer>
    );
}

export default Footer;