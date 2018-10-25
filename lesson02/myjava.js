/*
        IndividualCase Chapter01
        Author: Andrew Lasica
        Date:   10/24/2018

        Filename: index.htm
*/

document.getElementById("lastMod").innerHTML = document.lastModified;

function myAlert() {
    alert("Thanks for joining the newsletter! We will be in contact shortly.");
}

//Age verification prompt
document.getElementById("age").value;

function agePrompt() 
{
    var agePrompt=prompt("What is your age?");
    
    if (agePrompt>=18) alert('Welcome!');
    else 
    {
        alert('Sorry! Come back in a few years!');
        document.location="http://www.codelibary.com/";
    }
}