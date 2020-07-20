// Gets the value at an ID and puts it into a new variable.
let formRecieved = document.getElementById("inputForm");
let bdayRecieved = document.getElementById("birthdayInput");
let bdayShown = document.getElementById("showBday");
let diffShown = document.getElementById("showDiff");
// Uses the Date method to get the current date/ time in PST timezone.
let currentDate = new Date();

formRecieved.addEventListener("submit", getDays);

function getDays(event) {
    // For testing purposes only:
    // bdayShown.innerHTML = bdayDate;
    // console.log("bdayDate", bdayDate);

    // Actual Code: 
    event.preventDefault();
    // Upon hitting the button, a new date is assigned to bdayDate.
    // bdayDate is used to calculate how many millisecounds, seconds, minutes, hours, and days you have been alive.
    let bdayDate = new Date(bdayRecieved.value);
    let dateDiff = currentDate - bdayDate;
    let dateDiffSec = dateDiff/1000;
    let dateDiffMin = dateDiffSec/60;
    let dateDiffHr = dateDiffMin/60;
    // Math.round rounds up the number of days alive to a whole number
    let dateDiffDay = Math.round(dateDiffHr/24);
    // Prints out the number of days the user have been alive.
    diffShown.innerHTML = "You have been alive for " + dateDiffDay + " days!";


}