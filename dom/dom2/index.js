let div=document.createElement("div");
let h1=document.createElement("h1");
let div2=document.createElement("div");
let h2=document.createElement("h1");


function clock(){
    let time=new Date();
    let hours=String(time.getHours()).padStart(2,"0");
    let minutes=String(time.getMinutes()).padStart(2,"0");
    let seconds=String(time.getSeconds()).padStart(2,"0");
    h1.innerHTML = `${hours}:${minutes}:${seconds}`;
    h2.innerHTML = `${hours}:${minutes}:${seconds}`;
}


div.appendChild(h1);
document.body.appendChild(div);
div2.appendChild(h2);
document.body.appendChild(div2);
clock();
setInterval(clock,1000);




