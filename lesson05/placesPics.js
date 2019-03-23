/*eslint-env browser*/
/*jslint devel: true */

/*
IndividualCase Chapter05
        Author: Andrew Lasica
        Date:   03/22/2019

        Filename: placesPics.js
*/

var picOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function populatePics() {
    var filename;
    var currentPic;
    for (var i = 0; i < 9; i++) {
        filename = "images/Pic0" + picOrder[i] + ".jpg";
        currentFig = document.getElementsByName("ss")[i];
        currentFig.src = filename;
    }
}

function nextPic() {
    for (var i = 0; i < 9; i++) {
        if ((picOrder[i] + 1) === 9) {
            picOrder[i] = 1;
        } else {
            picOrder[i] += 1;
        }
        populatePics();
    }
}

function prevPic() {
    for (var i = 0; i < 9; i++) {
        if ((picOrder[i] - 1) === 0) {
            picOrder[i] = 9;
        } else {
            picOrder[i] -= 1;
        }
        populatePics();
    }
}

/* open center figure in separate window */
function zoomFig() {
    var propertyWidth = 960;
    var propertyHeight = 600;
    var winLeft = ((screen.width - propertyWidth) / 2);
    var winTop = ((screen.height - propertyHeight) / 2);
    var winOptions = "width=960,height=600,";
    winOptions += ",left=" + winLeft;
    winOptions += ",top=" + winTop;
    var ssPos = window.open("ss.htm", "ssZoom",
        winOptions);
    ssPos.focus();
}

function createEventListeners() {
    var leftarrow = document.getElementById("leftarrow");
    if (leftarrow.addEventListener) {
        leftarrow.addEventListener("click", leftArrow, false);
    } else if (leftarrow.attachEvent) {
        leftarrow.attachEvent("onclick", leftArrow);
    }

    var rightarrow = document.getElementById("rightarrow");
    if (rightarrow.addEventListener) {
        rightarrow.addEventListener("click", rightArrow, false);
    } else if (rightarrow.attachEvent) {
        rightarrow.attachEvent("onclick", rightArrow);
    }

    var mainFig = document.getElementsByName("ss")[5];
    if (mainFig.addEventListener) {
        mainFig.addEventListener("click", zoomFig, false);
    } else if (mainFig.attachEvent) {
        mainFig.attachEvent("onclick", zoomFig);
    }
}
