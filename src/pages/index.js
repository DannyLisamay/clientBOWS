//SEE TESTZIPCODE.JS FOR TRIAL RUN AND THOUGHT PROCESS
import React, { useEffect, useState } from 'react'
//BOWS API
import { getResortsData } from '../components/Resort/data/bowsAPI';

//import Snowboarder from '../images/snowboarder.jpg'
import { Link, useNavigate } from "react-router-dom";


//variable used for user input
var userZipCode;
//pre definded zipcode for testing
const moutainZip = "03242";
// UNQIUE API KEY DONT SHOW
const apikey = 'nC8qTyVabyAPlnldpR89nTs4OmvWmdyJmGeaHoklFH71ul1StpMre3CNxOhpCOyy';
//API used by getting apikey then having the userzipcode, and then having it compare to the second zipcode which is the mountainzipcode
var apiDistance = `https://www.zipcodeapi.com/rest/${apikey}/distance.json/${userZipCode}/${moutainZip}/mile`;


/*
// this is using the API as a function to use as the textbox by grabbing the id
// thus having it fetch the data and then console logging for now the data 
const searchzipcode = (data) => {
    userZipCode = document.getElementById('searchResortInput').value;
    apiDistance = `https://www.zipcodeapi.com/rest/${apikey}/distance.json/${userZipCode}/${moutainZip}/mile`;
    fetch(apiDistance)
        .then(response => response.json())
        .then(data => console.log(data));
};
*/

const Home = () => {
    // bowsAPI used for resorts
    const navigate = useNavigate();
    const ResortListFromApi = async () => {
        var searchResortInput = document.getElementById('searchResortInput').value;
        const data = await getResortsData();
        // Find resort from backend
        // split used to remove empty spaces. 
        // ex if user types patspeak will find pats peak.
        data.forEach(resort => {
            if (resort.name.split(' ').join('') === searchResortInput.split(' ').join('')) {
                navigate('/resort', { state: { resort } });
            }
        });
    }
    return (
        <div>
            <div className="aboutme">
                <p>
                    Please enter your zipcode or search up a resort you want to search for.
            </p>
            </div>
            <div className="background">
                <div className="searchbar">
                    <input type="text" id="searchResortInput" className="searchbar" placeholder="Please enter your zipcode or a Resort name"></input>

                    <button onClick={ResortListFromApi} className="searchbutton">SUBMIT </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
