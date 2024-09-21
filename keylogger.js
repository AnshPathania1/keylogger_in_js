const leftdiv = document.getElementById('left');
const rightdiv = document.getElementById('right');
const startbtn = document.getElementById('start-btn');
const stopbtn = document.getElementById('stop-btn');

startbtn.addEventListener('click',()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleup);
})
stopbtn.addEventListener('click',()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleup);
    leftdiv.textContent=" ";
    rightdiv.textContent=" ";
})
function handleDown(e){
    leftdiv.textContent = `key ${e.key} is pressed`;
    rightdiv.textContent = `key is down`;
}
function handleup(e){
    leftdiv.textContent = `key ${e.key} is pressed`;
    rightdiv.textContent = `key is up`;
}