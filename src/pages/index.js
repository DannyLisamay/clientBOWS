

import React from 'react';
import Snowboarder from '../images/snowboarder.jpg'

const Home = () => {
    return (
        <div>
            <h1> This is the Logo/Homepage </h1>
            <div class= "aboutme">
            <p> 
            Please enter your zipcode or search up a resort you want to search for. 
            </p>
            </div>
            <div class ="background">
        
                <div class= "searchbar">
                    <input type="text" class= "searchbar" placeholder="Please enter your zipcode or a Resort name"></input> 
                    <button type="submit" class= "searchbutton">SUBMIT </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
