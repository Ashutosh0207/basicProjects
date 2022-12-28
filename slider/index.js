let test=[
    {
        name:"Lonny R.",
        photo:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"Apple is the real deal! Apple is the most valuable business resource we have EVER purchased. I love apple. I STRONGLY recommend apple to EVERYONE interested in running a successful online business!"
    },
    {
        name:"Gwenore J.",
        photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"I STRONGLY recommend apple to EVERYONE interested in running a successful online business!"
    },
    {
        name:"Helen P.",
        photo:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"Apple is the most valuable business resource we have EVER purchased. I STRONGLY recommend apple to EVERYONE interested in running a successful online business! Apple impressed me on multiple levels. Apple did exactly what you said it does."
    },
]

let ind=0;
 const imgEl=document.querySelector("img");
 const textEl=document.querySelector(".text");
 const authorEl=document.querySelector(".author");

 function update(){
    const{name,photo,text}=test[ind];
    imgEl.src=photo;
    textEl.innerText=text;
    authorEl.innerText=name;
    ind=(ind+1)%3;

    setTimeout(()=>{
        update()
    },2000);
 }

 update();