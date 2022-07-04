let result = document.getElementById("result");

document.querySelector('button').addEventListener('click', event => {
    let userQuestion = document.getElementById("user-question").value;
    // first, make sure the user enters a question
    if (userQuestion == "") {
        result.innerHTML = "enter question";
    } else {
        let answer = Math.random();
        let algoAnswer = "";
      
           if (answer < 0.33) {
               algoAnswer = "YES";
            } else if (answer > 0.33 && answer < 0.66) {
                algoAnswer = "NO";
            } else {
                algoAnswer = "neither yes, nor no";
            };
            result.innerHTML = algoAnswer;
    }  
    });

