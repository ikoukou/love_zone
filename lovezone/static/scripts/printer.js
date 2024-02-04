const word = document.querySelector('.text')
let strs = ["如果，","樱花掉落的速度","是每秒5厘米.","那么两颗心,","需要多久才能靠近?"];
let index=0;
let charIndex=0;
let delta=300;
let start=null;
let isDeleting = false;

function type(time){
    window.requestAnimationFrame(type);
    if(!start) start=time;
    let progress=time-start;

    if(progress>delta){
        let text=strs[index];
        if(!isDeleting){
            word.innerHTML=text.slice(0, ++charIndex);
            delta=100-Math.random()+20;
        }
        else{
            word.innerHTML=text.slice(0, charIndex--);
        }

        start=time;
        if(charIndex== text.length){
            isDeleting=true;
            delta=100;
            start=time+100;
        }
        if(charIndex<0){
            isDeleting=false;
            start=time+100;
            index=++index%strs.length;
        }
    }
}
window.requestAnimationFrame(type);