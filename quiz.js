var quizForm =document.querySelector(".quiz-form");
var submitAns=document.querySelector("#Submit-ans");
var outputScore=document.querySelector(".output");
const correct =["90","right Angled"]
submitAns.addEventListener("click",calculateScore)

function calculateScore(){
    let score = 0;
    let index =0;
    let formResult=new FormData(quizForm);
    for(let entry of formResult.values()){
        if (entry===correct[index]) {
            score=score+1;
        }
        index=index+1;
    }
    outputScore.innerText="Your Score Is "+score
}
