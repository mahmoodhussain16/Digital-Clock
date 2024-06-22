
function clock(){
    const today = new Date();

    const hours = today.getHours();
    const minutes =today.getMinutes();
   const seconds= today.getSeconds();
   let period ="AM";

   if(hours >12 ){
    period="PM"
   }else{
    period= "AM"
   }
   


   document.querySelector(".hours").innerHTML = hours;
   document.querySelector(".minutes").innerHTML = minutes;
   document.querySelector(".seconds").innerHTML = seconds;
   document.querySelector(".period").innerHTML = period;

  
}

let updateclock = setInterval(clock, 1000);


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



let today = new Date();

const dayNumber = today.getDate();
const  year =today.getFullYear();
let day = weekday[today.getDay()];
let monthname = month[today.getMonth()];


document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;
document.querySelector(".day-name").innerHTML = day;
document.querySelector(".month-name").innerHTML = monthname;



