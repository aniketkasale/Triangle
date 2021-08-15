var base=document.querySelector("#b");
var height=document.querySelector("#h");
var button=document.querySelector("#area-btn");
var output=document.querySelector("#output");
button.addEventListener("click",calcArea)
function calcArea(){
    let multiplication=Number(base.value)*Number(height.value)
    const area=0.5*multiplication
    output.innerText = "The Area is "+area+"cm"
}