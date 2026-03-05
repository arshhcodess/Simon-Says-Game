let gamesq=[];
let usersq=[];
let start=false;
let level=0;
let btns=["orange","pink","green","blue"];
let h2=document.querySelector("h2");
let body=document.querySelector("body");
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    usersq=[];
    level++;
    h2.innerText= `Level ${level}`;
    let randIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gamesq.push(randColor);
    console.log(gamesq);
    btnFlash(randbtn);
} 
function btnPress(){
    console.log("button");
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    usersq.push(userColor);
    console.log(usersq);
    checkAns(usersq.length-1);
}
function checkAns(lastelemnet){
    let idx=lastelemnet;
    if(usersq[idx]===gamesq[idx]){
        if(usersq.length==gamesq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score Is ${level}. Press any key to Restart`;
        body.classList.add("forbody");
        setTimeout(function(){
            body.classList.remove("forbody");
        },500)


        reset();
    }
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start=false;
    usersq=[];
    gamesq=[];
    level=0;
}