let button1 = document.getElementById('button1');

let response1 = document.getElementById('response1');

button1.addEventListener("click", function(){
    response1.innerHTML("Whoa! I am a changed sentence!");
    response1.className = 'barrelRoll'
});