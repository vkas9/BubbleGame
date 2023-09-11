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
            if(time<=0){
                clearInterval(w);
            }
            document.querySelector("#two").innerHTML=time;
            
            time--;
        },1000);
    
}
function hitChanger(){

    document.querySelector("#changestart").textContent=Math.floor(Math.random()*20);
}
hitChanger();
Timer();
Circles();