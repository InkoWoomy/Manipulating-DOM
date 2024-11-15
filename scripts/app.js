let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let button10 = document.getElementById('button10');

let response1 = document.getElementById('response1');
let response2 = document.getElementById('response2');
let response3 = document.getElementById('response3');
let response4 = document.getElementById('response4');
let response5 = document.getElementById('response5');
let response6 = document.getElementById('response6');
let response7 = document.getElementById('response7');
let response8 = document.getElementById('response8');
let response9 = document.getElementById('response9');
let response10 = document.getElementById('response10');

button1.addEventListener("click", function(){
    response1.innerHTML = 'Whoa! I am a changed sentence!';
    response1.classList.add('barrelRoll');
    
});

button2.addEventListener("click", function(){
    response2.innerHTML = "Wait, that's not right...";
    button2.classList.add('shake');
});

button3.addEventListener("click", function(){
    response3.innerHTML = "Oh, there it is -> !";
    response3.classList.add('slideLeft');
});

button4.addEventListener("click", function(){
        response4.classList.add('pulse');
});

button5.addEventListener("click", function(){
        response5.classList.add('wiggle');
});

button6.addEventListener("click", function(){
        response6.classList.add('zoomerOut');
});

button7.addEventListener("click", function(){
        response7.classList.add('zoomer');
        response7.innerHTML = "Okay I'm back.";
});

button8.addEventListener("click", function(){
        response8.classList.add('rotateInLeft');
        response8.innerHTML = "BEHOLD!!!";
});

button9.addEventListener("click", function(){
        response9.classList.remove('heartbeat');
        response9.innerHTML = "Thank you...";
});

button10.addEventListener("click", function(){
        response10.classList.add('spinner');
});

