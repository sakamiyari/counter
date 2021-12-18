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
hendou();
}
function countdown(){
    count=JSON.parse(count);
    count--;
    if(count<=0){
        count=0;
    }
    hyouji.innerText=count;
    localStorage.setItem("count",JSON.stringify(count));
    hendou();
}
function rest(){
    //リセット
    if(window.confirm("カウントをリセットします。本当によろしいですか?")){
        count=JSON.parse(count);
        count=0;
        hyouji.innerText=count;
        localStorage.setItem("count",JSON.stringify(count));
        hendou();
    }
}
//色違いの確率のプログラム
let $page=document.getElementById("page");
//DOMの操作は$という暗黙的なルールに基づく。
//色違いの確率
let kakuritu=1/4096
let comb=0;//コンボレーションの値を保存させるやつ
function kaku(){
    let $namae=document.getElementById("namae");
    if($namae.value=="色違いの出現する確率を非表示にする"){
        $namae.value="色違いの出現する確率を表示する";
    }else{
        //表示するというテキストの場合
        $namae.value="色違いの出現する確率を非表示にする";
    }
    hendou();
}
function hendou(){
    //呼び出し用
    let $namae=document.getElementById("namae");
    if($namae.value=="色違いの出現する確率を非表示にする"){
        if(count>0){
            if(count==1){
                let page=Math.floor(kakuritu*100*1000)/100;
                $page.innerText="確率:"+page+"%";
            }else{
                //それ以外は計算する。
                for(let i=1;i<count;i++){

                }
            }
        }else{
            //カウントが0だとエラー
        $page.innerText="算出不可能です。"  
        }
    }else{
        $page.innerText="";
    }
}