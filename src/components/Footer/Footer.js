// Footer component dynamically update year 
import React from "react";

const footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            Copyright © {currentYear}
        </footer>
    );
};

// Default return for footer component 
export default footer