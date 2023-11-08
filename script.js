



function makeBubble(){
    var clutter="";
    for(i=1; i<=160; i++){
        
        var rn=Math.floor(Math.random()*10);
        clutter +=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector('.pbtm').innerHTML=clutter;
}
 function setTimmer(){
   
    var timer=20;
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timer').textContent=timer;}
        // }else if(scoreval===100){
        //    document.querySelector('#scoreval').innerHTML=`<h1>you are winnner</h1>`
        // }
        else{
            clearInterval(timerint);
            document.querySelector('.pbtm').innerHTML=`<h1>Game over</h1>`
        }
    },1000)
   
 }
 var hitrn=0;
 function hitvalue(){
   hitrn=Math.floor(Math.random()*10);
  document.querySelector('#hitval').innerHTML=hitrn;
 }
 var score=0;

 function increasescore(){
     var scoreval= score+=20;
    if(score === 200){
        // document.write("you are winner")
       
        document.querySelector('.winner').style.display='flex'
    setTimeout(() => {
        document.querySelector('.winner').style.display='none'
        
    }, 2000);
        // document.querySelector('.winner').innerHTML='you are winner'
    }else{
        document.querySelector('#scoreval').textContent=scoreval;
    }
 }
//  increasescore();

function decreasescore(){
    var scoredes= score-=20;
    document.querySelector('#scoreval').textContent=scoredes;

//    if(score === 200){
//        // document.write("you are winner")
      
//        document.querySelector('.winner').style.display='flex'
//    setTimeout(() => {
//        document.querySelector('.winner').style.display='none'
       
//    }, 2000);
//        // document.querySelector('.winner').innerHTML='you are winner'
//    }else{
//        document.querySelector('#scoreval').textContent=scoredes;
//    }
}
 document.querySelector('.pbtm').addEventListener('click',function(dets){
    var clicked= Number(dets.target.textContent);
    if(hitrn===clicked){
        increasescore();
        hitvalue();
       makeBubble();

    }
     else if(hitrn!=clicked){
        decreasescore();
    //     hitvalue();
    //    makeBubble();

    }
 })
 hitvalue();
 setTimmer();
 makeBubble();
 