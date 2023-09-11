var score=0;
function changeScore(){
    score+=10;
    document.querySelector("#changescore").textContent=score;
}


function Circles(){

    let temp="";
    
    const f=document.querySelector(".panel")
    for(let i=1;i<=120;i++){
    
        temp+= `<h1>${Math.floor(Math.random()*20)}</h1>`
    }
    f.innerHTML+=temp;
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
                f.textContent="The End!!!!";

                clearInterval(w);
            }
            
        },50);
    
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
hitChanger();
Timer();
Circles();
