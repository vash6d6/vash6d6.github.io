/*eslint-env browser*/
/*jslint devel: true */

/*
IndividualCase Chapter05
        Author: Andrew Lasica
        Date:   03/22/2019

        Filename: ss.js
*/

// Interpret document contents in JavaScript strict mode
"use strict";

/* global variables */
var picOrderArray = window.opener.picOrder;
var figFilename = "images/Pic0" + picOrderArray[5] + ".jpg";

// Populate img element
function pageSetup() {
    // assign filename to img element
    document.getElementsByTagName("img")[0].src = figFilename; 
}


// Sets img element source on page load
window.onload = pageSetup;
