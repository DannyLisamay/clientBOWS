import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1> Contact Us </h1>
            <div className="form-group">
                <form>
                    <label htmlFor="name"> First and Last Name: </label>
                    <input type="text" id="name" placeholder="First and Last name"></input> <br></br>

                    <label htmlFor="message"> Message: </label>
                    <textarea name="message" id="message" cols="30" rows="10" />

                    <label htmlFor="email"> Your Email: </label>
                    <input type="text" id="email" placeholder="Please enter your email address"></input> <br></br>

                    <button type="submit" className="searchbutton">SUBMIT </button>
                </form>
            </div>

            <div id="status" className="success"> Success your email has been sent! </div>
        </div>

    );
};

export default Contact;
