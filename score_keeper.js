const p1Button=document.querySelector('#p1Button');
const p2Button=document.querySelector('#p2Button');
const reset=document.querySelector('#reset');
const p1Score=document.querySelector('#p1Score');
const p2Score=document.querySelector('#p2Score');
const range=document.querySelector('#range');
let p1=0;
let p2=0;
let winScore=3;
let isGameOver=false;
p1Button.addEventListener('click',function(){

    if(isGameOver===false){
        p1++;
        if(p1===winScore){
            isGameOver=true;
            p1Score.classList.add('winner');
            p2Score.classList.add('looser');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
        p1Score.textContent=p1;
    }
})
p2Button.addEventListener('click',function(){
    
    if(isGameOver===false){
        p2++;
        if(p2===winScore){
            isGameOver=true;
            p2Score.classList.add('winner');
            p1Score.classList.add('looser');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
        p2Score.textContent=p2;
    }
})
range.addEventListener('change',function(){

    winScore=parseInt(range.value);
    resetFunc();
})
reset.addEventListener('click',resetFunc)

function resetFunc(){
    isGameOver=false;
    p1=0;
    p2=0;
    p1Score.classList.remove('winner');
    p1Score.classList.remove('looser');
    p2Score.classList.remove('winner');
    p2Score.classList.remove('looser');
    p1Score.textContent=0;
    p2Score.textContent=0;
    p1Button.disabled=false;
    p2Button.disabled=false;
}