let count=localStorage.getItem("count");
if(!count){
    count=localStorage.setItem("count","0")
}
let hyouji=document.getElementById("hyouji");
hyouji.innerText=count;
function countup(){
count=JSON.parse(count);
count++;
hyouji.innerText=count;
localStorage.setItem("count",JSON.stringify(count));
}
function countdown(){
    count=JSON.parse(count);
    count--;
    if(count<=0){
        count=0;
    }
    hyouji.innerText=count;
    localStorage.setItem("count",JSON.stringify(count));
}
function rest(){
    //リセット
    if(window.confirm("カウントをリセットします。本当によろしいですか?")){
        count=JSON.parse(count);
        count=0;
        hyouji.innerText=count;
        localStorage.setItem("count",JSON.stringify(count));
    }
}