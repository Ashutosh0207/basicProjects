const ctr=document.querySelector(".percentage");

const barEl=document.querySelector(".finalbar");

let ind=0;
 function updatePer(){
    ctr.innerText=ind+"%";
    barEl.style.width=ind+"%";
    ind=ind+1;
    if(ind<=100){
        setTimeout(updatePer,20);
    }
 }

updatePer()
