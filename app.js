let codes=document.getElementById("codes");
let play=document.getElementById("play");
let remov=document.getElementById("remov");
let result=document.getElementById("result");
play.onclick=()=>{
    result.innerHTML=codes.value;
    localStorage.setItem("RESUT",codes.value);
};
remov.onclick=()=>{
    result.innerHTML="";
    codes.value="";
}
onload=()=>{
    codes.value=localStorage.setItem("RESUT",codes.value);
    result.innerHTML=codes.value;
}