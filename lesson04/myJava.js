/*eslint-env browser*/
/*jslint devel: true */

/*
IndividualCase Chapter03
        Author: Andrew Lasica
        Date:   03/04/2019

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
    if (document.getElementById("Body")) {
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

}

function myAlert() {
    'use strict';
    var errorMsg = "";
    try {
        //If statement to check if the required Yes, No radio button has a selection.
        if (document.getElementById("newsletterYes").checked === false && document.getElementById("newsletterNo").checked === false) {
            errorMsg = "You must choose Yes or No in order to submit.";
            //If statement to check that the first name is not blank when submitted.
        } else if (document.getElementById("firstName").value === "") {
            errorMsg = "You must enter a first name in order to submit.";
            //If statement to check that the last name is not blank when submitted.
        } else if (document.getElementById("lastName").value === "") {
            errorMsg = "You must enter a last name in order to submit.";
            //If statement to make sure an email address has been entered.
        } else if (document.getElementById("email").value === "") {
            errorMsg = "You must enter an email address in order to submit.";
            //If there is no missing data in the required fields they will be met with a thank you via an alert.
        } else {
            errorMsg = "Thank You";
        }
        // Catch statement to display any errors missed by the common error checks above.
    } catch (e) {
        errorMsg = e.message;
    }
    alert(errorMsg);
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

//Event listener for post IE8 browsers.
if (window.addEventListener) {
    //Listens for the "load" event and runs the "setUp" function once with the false flag.
    window.addEventListener("submit", myAlert, false);
    //Event listener for IE8 and previous browsers.
} else if (window.attachEvent) {
    //Listens for the "onload" event and runs the "setUp" function once with the false flag.
    window.attachEvent("onsubmit", myAlert);
}
