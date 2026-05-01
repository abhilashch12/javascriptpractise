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
 let firstq=questions[0];
 let h2 = document.createElement("h2");
 h2.textContent=firstq.question;
 quizq.appendChild(h2);
 firstq.options.forEach(option=>{
       let p = document.createElement("p");
       p.textContent=option;
       p.addEventListener("click",()=>{
        if(p.textContent===firstq.answer){
            p.classList.add("backgroundcorrect");
        }
        else{
           p.classList.add("backgroundwrong"); 
        }
        console.log("clicked");
       })
       quizq.appendChild(p);
 })

 
