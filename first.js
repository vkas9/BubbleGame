var score=0;
function changeScore(){
    score+=10;
    document.querySelector("#changescore").textContent=score;
}


function Circles(){

    let temp="";
    
    const f=document.querySelector(".panel")
    for(let i=1;i<=120;i++){
    
        temp+= `<div class="bubble">${Math.floor(Math.random()*20)}</div>`
    }
    f.innerHTML+=temp;
}
function grad(){
    const gd=document.querySelector(".menu")
    setInterval(()=>{
        
        const red=Math.floor(Math.random()*255);
        const green=Math.floor(Math.random()*255);
        const blue=Math.floor(Math.random()*255);
        const color=`rgb(${red},${green},${blue})`;
        // gd.style.background=linear-gradient(  color,  color);
        // gd.style.background=color;
        
    },900);
}
function Timer(){
    
    let time=60;
   
        const w=setInterval(()=>{
            if(time>0){
                document.querySelector("#two").innerHTML=time;
                time--;
            }
            else{
                const t=document.querySelector("#changescore").textContent;
                
                alert(`Times up! and your score is ${t}`);
                const f=document.querySelector(".panel");
                f.style.color="white";
                f.style.background="black";
                f.textContent="THE END!!!!";

                clearInterval(w);
            }
            
        },1000);
    
}
function hitChanger(){

    document.querySelector("#changestart").textContent=Math.floor(Math.random()*20);
}
document.querySelector(".panel")
.addEventListener("click",(e)=>{
    if(e.target.textContent==document.querySelector("#changestart").textContent){
        changeScore();
        hitChanger();

    }
})
function Start(){
    const button=document.querySelector(".start");
    button.addEventListener("click",()=>{
        Timer();
        button.style.disabled=true;
    })
}
hitChanger();
Start();
Circles();
grad();
