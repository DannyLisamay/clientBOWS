// Resort component 
import React from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//const sortArr = ["Distance", "Review", "Price"];

const SortBy = () => {
    return (
        <div class="sortBy">
            <div class="dropdown">
                <label class="lblSortBy">SortBy: </label>
                <button class="btnSortBy btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                </div>
                <div class="float-right">
                    <label class="lblCompare">Select Three Resorts</label>
                    <button class="btnCompare btn btn-light">Compare</button>
                </div>
            </div>
        </div>
    )
};


export { SortBy }