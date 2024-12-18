let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {

    let date = new Date();

    // Getting Hour, mins secs from date

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotaiton = 30*hh + mm/2;
    let mRotation = 6*min;
    let sRotation = 6*ss;


    hr.style.transform = `rotate(${hRotaiton}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;


}

setInterval(displayTime , 1000);