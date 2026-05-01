let questions = [{question: "What is the capital of France?",
                  options:["Paris", "Rome", "Berlin", "Madrid"],
                  answer: "Paris"},
                  {question:"Who is known as the Father of Computers?",
                    options:["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
                    answer:"Charles Babbage"},
                  {question:"Which planet is known as the Red Planet?",
                    options:["Earth", "Mars", "Jupiter", "Venus"],
                    answer:"Mars"},
                  {question:"What is the largest ocean on Earth?",
                    options:["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                    answer:"Pacific Ocean"},
                   {question:"Who wrote the national anthem of India?",
                    options:["Rabindranath Tagore", "Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru"],
                    answer:"Rabindranath Tagore"},
                    {question:"What is the chemical symbol for water?",
                    options:["H2O", "O2", "CO2", "NaCl"],
                    answer:"H2O"},
                    {question:"Which country is famous for the Great Wall?",
                    options:["India", "China", "Japan", "Korea"],
                    answer:"China"},
                    {question:"How many continents are there on Earth?",
                    options:["5","6","7","8"],
                    answer:"7"},
 ]
 let quizq=document.querySelector("#questions");
 let index=0;
 let score= 0;
 let nextBtn = document.createElement("button");
 nextBtn.textContent="next";
 let showresult=document.createElement("button");
 showresult.textContent="results";
 let resultpage=document.createElement("h3");
 let playagain = document.createElement("button");
 playagain.textContent="play again";
 function repeat()
 {
 quizq.innerHTML="";
 let allQuestions=questions[index];
 let h2 = document.createElement("h2");
 h2.textContent=allQuestions.question;
 quizq.appendChild(h2);
 let count = 0;
 allQuestions.options.forEach(option=>{
       let p = document.createElement("p");
       p.textContent=option;
       p.addEventListener("click",()=>{
        count++;
        if(count==1){
        if(p.textContent===allQuestions.answer){
            p.classList.add("backgroundcorrect");
            score++;
        }
        else{
           p.classList.add("backgroundwrong"); 
        }
      }});
      quizq.appendChild(p);
    });
    let questionNum = document.createElement("p");
    questionNum.textContent=`question ${index+1} of ${questions.length}`;
    quizq.appendChild(questionNum);

      if(index==questions.length-1){
        quizq.appendChild(showresult);
      }
      else{
        quizq.appendChild(nextBtn);
      }
    }     
 nextBtn.addEventListener("click",()=>{
  index++;
  repeat();
 });
showresult.addEventListener("click",()=>{
          quizq.innerHTML= " ";
          resultpage.textContent=`you have scored:${score} with the percentage of ${(score/questions.length)*100}`;
          quizq.appendChild(resultpage);
          quizq.appendChild(playagain);
      })

 playagain.addEventListener("click",()=>{
    index=0;
    score=0;
    repeat();
    
  });

  repeat();
