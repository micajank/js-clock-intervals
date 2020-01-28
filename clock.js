
var hourDegrees = .5;


let hourHandRotation = function() {
    var hhr = document.getElementById("hour");
    hhr.style.transform = "rotate(" + hourDegrees + "deg)";
    hourDegrees += .5;
};

let hourHand = setInterval(hourHandRotation, 60000);



var minuteDegrees = 6;

let minuteHandRotation = function() {
    var mhr = document.getElementById("minute");
    mhr.style.transform = "rotate(" + minuteDegrees + "deg)";
    minuteDegrees += 6;
};

let minuteHand = setInterval(minuteHandRotation, 60000);

 

var secondDegrees = 6;

let secondHandRotation = function() {
    var shr = document.getElementById("second");
    shr.style.transform = "rotate(" + secondDegrees + "deg)";
    secondDegrees += 6;
};

let secondHand = setInterval(secondHandRotation, 1000);