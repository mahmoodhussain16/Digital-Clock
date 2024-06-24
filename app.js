
function clock(){
    const today = new Date();

    const hours =today.getHours();
    const minutes =today.getMinutes();
   const seconds= today.getSeconds();
   let period ="AM";




   if(hours >=12 ){
    period="PM"
   }
//    if(hours>12){
//     hours=hours-12;
//    }



   if(hours<10){
    hours="0"+hours;
   }
   if(minutes<10){
    minutes="0"+minutes;
   }
   if(seconds<10){
    seconds="0"+seconds;
   }

//    message add
    if(hours<12){
    method="Good Morning"
    }
    if(hours>= 12 && hours<=17){
    method="Good Afternoon"}
    if(hours>= 17 && hours<=24){
    method="Good Evening"}
   




 
 


   document.querySelector(".hours").innerHTML = hours;
   document.querySelector(".minutes").innerHTML = minutes;
   document.querySelector(".seconds").innerHTML = seconds;
   document.querySelector(".period").innerHTML = period;
   document.querySelector(".method").innerHTML = method;

  
}

let updateclock = setInterval(clock,1000);


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



