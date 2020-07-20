let formRecieved = document.getElementById("inputForm");
let bdayRecieved = document.getElementById("birthdayInput");
let bdayShown = document.getElementById("showBday");
let diffShown = document.getElementById("showDiff");
let currentDate = new Date();

formRecieved.addEventListener("submit", getDays);

function getDays(event) {
    event.preventDefault();
    let bdayDate = new Date(bdayRecieved.value);
    let dateDiff = currentDate - bdayDate;
    let dateDiffSec = dateDiff/1000;
    let dateDiffMin = dateDiffSec/60;
    let dateDiffHr = dateDiffMin/60;
    let dateDiffDay = Math.round(dateDiffHr/24);
    // For testing purposes only:
    // bdayShown.innerHTML = bdayDate;
    // console.log("bdayDate", bdayDate);
    // Actual Code: 
    diffShown.innerHTML = "You have been alive for " + dateDiffDay + " days!";


}