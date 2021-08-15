var a=document.querySelector("#a");
var b=document.querySelector("#b");
var button=document.querySelector("#hypo-btn");
var output=document.querySelector("#output");
button.addEventListener("click",calcHypo)
function calcHypo(){
    let sumOfsqrs=(Number(a.value))*(Number(a.value)) +(Number(b.value))*(Number(b.value));
    const lengthOfHypo=Math.sqrt(sumOfsqrs);
    output.innerText = "The Hypotenuse is "+lengthOfHypo
}