const b1 = document.getElementById("box1");
const b2 = document.getElementById("box2");
const b3 = document.getElementById("box3");
const b4 = document.getElementById("box4");

//box1
const rndmNum=()=>{
let ran = Math.floor(Math.random()*100);
b1.innerHTML = ran;
}
function revsToOne(){
    b1.innerHTML = "1";
 }
 b1.addEventListener("mouseover",rndmNum);
 b1.addEventListener("mouseleave",revsToOne);
 //box1

 
const genColorCode = () =>{
let red = Math.floor(Math.random()*256);
let green = Math.floor(Math.random()*256);
let blue = Math.floor(Math.random()*256);
let colorCode = `rgb(${red},${green},${blue})`
return colorCode;
}
const revColorToWhite=()=>{
    b3.style.backgroundColor = "white";
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
}

//box3
const colorChange = ()=>{
    b3.style.backgroundColor= genColorCode();
}
b3.addEventListener("mouseover",colorChange);
b3.addEventListener("mouseleave",revColorToWhite);
//box3

//box2
let col = "blue";
b2.addEventListener("mouseover" ,()=>{
    if(col == "blue") col = "red";
    else if(col=="red") col = "blue";
    b2.style.backgroundColor = col;

});
b2.addEventListener("mouseleave",revColorToWhite);
//box2


//box4
const threeBox = ()=>{
    let box1 = genColorCode();
    let box2 = genColorCode();
    let box3 = genColorCode();
    b1.style.backgroundColor = box1;
    b2.style.backgroundColor = box2;
    b3.style.backgroundColor = box3;
}
b4.addEventListener("click",threeBox);
b4.addEventListener("mouseleave",revColorToWhite);
//box4







