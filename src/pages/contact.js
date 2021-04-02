import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1> Contact Us </h1>
                <div class="form-group">
                <form>
                    <label for="name"> First and Last Name: </label>
                    <input type="text" id="name" placeholder="First and Last name"></input> <br></br>

                    <label for="message"> Message: </label>
                    <textarea name="message" id="message" cols= "30" rows="10"> </textarea>

                    <label for="email"> Your Email: </label>
                    <input type="text" id="email" placeholder="Please enter your email address"></input> <br></br>

                    <button type="submit" class= "searchbutton">SUBMIT </button>
                </form>
                </div>

                <div id="status" class="success"> Success your email has been sent! </div>
        </div>
        
    );
};

export default Contact;
