arr=['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0];
let hex='#';
let x=0;
let body=document.body
const ran =()=>{

return  Math.floor(Math.random()*arr.length); 
}

window.addEventListener('mousemove',()=>{
    for(let i=0;i<=5;i++){
        hex=hex+arr[ran()]
    }
    body.style.background= hex;
    body.style.transition='all 0.2s'
    hex='#'
})