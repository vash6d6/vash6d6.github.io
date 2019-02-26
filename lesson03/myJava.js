/*eslint-env browser*/
/*jslint devel: true */

/*
IndividualCase Chapter03
        Author: Andrew Lasica
        Date:   02/25/2019

        Filename: myJava.js
*/

//Function used to find how many years left until the user is of an eligible age.
function ageDiff(age) {
    //Enable the use strict expression to indicate the code should be used in W3 strict code standards.
    'use strict';
    // simply subtracts 18 from the age entered and gives us the difference.
    return Math.abs(age - 18);
}

function setUp() {
    //enable the use strict expression to indicate the code should be used in W3 strict code standards.
    'use strict';
    //Sets the content of the body to invisible, until verification passes.
    document.getElementById("Body").style.visibility = "hidden";
    //Prompts the user to enter their age and sets the value to the "age" variable.
    var age = prompt("What is your age?");
    
    //If the age entered is greater than 18 they will be welcomed and allowed into the site.
    if (age >= 18) {
        //Displays a popup welcoming the user to the site.
        alert('Welcome!');
        //Sets the contents of the body to visable if verification passes.
        document.getElementById("Body").style.visibility = "visible";
    
    //If the age entered is not greater than 18 they will be denied access and told to come back in a number of years.
    } else {
    // Displays an alert that uses the ageDiff funtion to return a number of years until they can enter the site.
        alert('This is an 18+ website. Please come back in ' + ageDiff(age) + ' years.');
    }
    
}

//Event listener for post IE8 browsers.
if (window.addEventListener) {
    //Listens for the "load" event and runs the "setUp" function once with the false flag.
    window.addEventListener("load", setUp, false);
//Event listener for IE8 and previous browsers.
} else if (window.attachEvent) {
    //Listens for the "onload" event and runs the "setUp" function once with the false flag.
    window.attachEvent("onload", setUp);
}
