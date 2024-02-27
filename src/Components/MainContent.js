import React from "react";

function MainContent() {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div style={{width: '75%'}}>
                    <img style={{maxWidth: '100%' , maxHeight: '100%' }} src="1.png" alt="img1"/>
                </div>
                <div style={{flexGrow: '1'}}>
                    <b> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>
                    <ul>
                        <li style={{textAlign: 'left'}}>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li style={{textAlign: 'left'}}>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                    <img style={{width: '100%', height: 'auto'}} src="2.png" alt="img2"/>
                        <p style={{ textAlign:'left'}}>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>


            <div>
                <p style={{textAlign: 'center'}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </p>
                <img style={{width: 'calc(100vw - 400px)' , maxWidth: '900px' , height: '350px' , marginLeft: '200px' , marginRight: '200px'}} src="3.png" alt="img3"/>
                    <p style={{textAlign: 'center'}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>

            <hr style={{borderColor: 'red', marginLeft: '20px' , marginRight: '20px'}}/>

                <b style={{display: 'block' , textAlign: 'center'}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                </b>
                <div style={{textAlign: 'center'}}>
                    <p style={{color: 'black'}}>
                        CHEMICALS & PROCESS <span style={{color: 'red'}}>|</span>
                        POWER <span style={{color: 'red'}}>|</span>
                        WATER & WASTE WATER <span style={{color: 'red'}}>|</span>
                        OILS & GAS <span style={{color: 'red'}}>|</span>
                        PHARMA <span style={{color: 'red'}}>|</span>
                        SUGARS & DISTILLERIES <span style={{color: 'red'}}>|</span>
                        PAPER & PULP <span style={{color: 'red'}}>|</span>
                        MARINE & DEFENCE <span style={{color: 'red'}}>|</span>
                        METAL & MINING <span style={{color: 'red'}}>|</span>
                        FOOD & BEVERAGE <span style={{color: 'red'}}>|</span>
                        PETROCHEMICAL & REFINERIES <span style={{color: 'red'}}>|</span>
                        SOLAR <span style={{color: 'red'}}>|</span>
                        BUILDING <span style={{color: 'red'}}>|</span>
                        HVAC <span style={{color: 'red'}}>|</span>
                        FIRE FIGHTING <span style={{color: 'red'}}>|</span>
                        AGRICULTURE & RESIDENTIAL
                    </p>
                </div>
        </div>
    )
}

export default MainContent;