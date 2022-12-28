const monthEl= document.querySelector(".date h1");
const monthIndex=new Date().getMonth();

let months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

monthEl.innerText=months[monthIndex];

const fullDateEl= document.querySelector(".date p");
const fd=new Date().toDateString();

fullDateEl.innerText=fd;

const daysEl= document.querySelector(".days");

const lastDay=new Date(new Date().getFullYear(), monthIndex+1, 0).getDate();

const firstDay=new Date(new Date().getFullYear(), monthIndex, 1).getDay()-1;

let days="";

for(let i=firstDay; i>0; i--){
    days+=`<div class="empty"></div>`;
}

for(let i=1; i<=lastDay; i++){
    days+=`<div>${i}</div>`;
}

daysEl.innerHTML=days;