//SEE TESTZIPCODE.JS FOR TRIAL RUN AND THOUGHT PROCESS

import React from 'react';
//import Snowboarder from '../images/snowboarder.jpg'
import { Link } from "react-router-dom";

//variable used for user input
var userZipCode;
//pre definded zipcode for testing
const moutainZip = "03242";
// UNQIUE API KEY DONT SHOW
const apikey = 'nC8qTyVabyAPlnldpR89nTs4OmvWmdyJmGeaHoklFH71ul1StpMre3CNxOhpCOyy';
//API used by getting apikey then having the userzipcode, and then having it compare to the second zipcode which is the mountainzipcode
var apiDistance = `https://www.zipcodeapi.com/rest/${apikey}/distance.json/${userZipCode}/${moutainZip}/mile`;


// this is using the API as a function to use as the textbox by grabbing the id
// thus having it fetch the data and then console logging for now the data 
const searchzipcode = (data) => {
    userZipCode = document.getElementById('zipcode').value;
    apiDistance = `https://www.zipcodeapi.com/rest/${apikey}/distance.json/${userZipCode}/${moutainZip}/mile`;
    fetch(apiDistance)
        .then(response => response.json())
        .then(data => console.log(data));
};



const Home = () => {
    return (
        <div>
            <div className="aboutme">
                <p>
                    Please enter your zipcode or search up a resort you want to search for.
            </p>
            </div>
            <div className="background">


                <div className="searchbar">
                    <input type="text" id="zipcode" className="searchbar" placeholder="Please enter your zipcode or a Resort name"></input>

                    <Link to="/compare">
                        <button onClick={searchzipcode} className="searchbutton">SUBMIT </button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
