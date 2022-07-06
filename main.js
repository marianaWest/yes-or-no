const result = document.querySelector("#result")

document.querySelector('.algo-asks').addEventListener('click', event => {
    const userQuestion = document.getElementById("user-question").value;
    // to make the question section disappear on click
    document.querySelector('.question').classList.add('hidden');
    // to make sure the user enters a question
    if (userQuestion == "") {
        result.innerText = "enter a yes-or-no question";
    } 
    else {
        let answer = Math.random();
            if (answer < 0.25) {
              result.innerText ="YES"
            } else if (answer >= 0.25 && answer < 0.50) {
                result.innerText="NO";               
            } else if (answer >= 0.50 && answer < 0.75) {
               result.innerText = "neither yes, nor no";
            } else {
              result.innerText = "maybe";
            };    
    }});

      // to make question re-appear
      document.getElementById("result").addEventListener('click', event => {
        document.querySelector('.question').classList.remove('hidden');
        result.innerText = "";
        // img.src="img/black.PNG"
      })

     
