// console.log('hello');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mk-nav-menu");
const navLink = document.querySelectorAll(".mk-nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



// for digital-clock section start 
let getdisplay = document.getElementById('display');

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(days);

function startclock(){
    let getdate = new Date();

    let gethours = getdate.getHours();

    let getminutes = getdate.getMinutes();

    let getseconds = getdate.getSeconds();

    let getday = getdate.getDay();

    let getampm;
    switch(gethours > 12){
        case true:
        getampm = "PM"
        getampm = gethours - 12;
        break;

        case false:
        getampm = "AM"
        getampm = gethours;
        break;
    }
    let setclock = `${getampm}:${getminutes}:${getseconds} - ${days[getday]}`;

    getdisplay.textContent = setclock;

}
setInterval(startclock,1000);
//digital-clock section end


// auto year copyright section
let date = new Date();
let year = date.getFullYear();
console.log(date,year);
document.getElementById("autoyear").textContent = year; 