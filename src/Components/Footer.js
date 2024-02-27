import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer style={{ backgroundColor: 'red', padding: '30px' , margin:'5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <a href="tel:+1234567890" style={{ color: 'white' }}><FontAwesomeIcon icon={faPhone} style={{ color: "#e7eaee" }} /> Toll free <b>1800 200 1234</b></a> 
                </div>
                <div>
                    <a href="www.facebook.com" style={{ color: 'white' }}><FontAwesomeIcon icon={faFacebook} /> www.facebook.com/cripumps</a>
                </div>
                <div>
                    <a href="www.crigroups.com" style={{ color: 'white' }}><FontAwesomeIcon icon={faGlobe} /> www.crigroups.com</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
