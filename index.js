var angle1=document.querySelector("#Angle1");
var angle2=document.querySelector("#Angle2");
var angle3=document.querySelector("#Angle3");
var isTriangleBtn=document.querySelector("#isTriangle");
var output=document.querySelector("#output")
isTriangleBtn.addEventListener("click",isTriangle);
function isTriangle(){
    let sumOfAngles= Number(angle1.value)+Number(angle2.value)+Number(angle3.value)
    if (sumOfAngles===180) {
        output.innerText ="This Angles Form A Triangle"
   
    }else{
        output.innerText ="This Angles cannot Form A Triangle"
    }
}

