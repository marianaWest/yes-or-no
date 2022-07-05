const img = document.querySelector(".algo-img");
const algoAnswer = img;


document.querySelector('.algo-asks').addEventListener('click', event => {
    const userQuestion = document.getElementById("user-question").value;

    // to make the question section disappear on click
    document.querySelector('.question').classList.add('hidden');

    // to make sure the user enters a question
    if (userQuestion == "") {
        img.src="img/question.PNG";
    } else {
        let answer = Math.random();
            if (answer < 0.33) {
            img.src="img/yes.png"
            } else if (answer > 0.33 && answer < 0.66) {
                img.src="img/no.jpg";               
            } else {
               img.src = "img/neither.PNG";
            };
    }
      });

      // to make question re-appear

      document.getElementById("result").addEventListener('click', event => {
        document.querySelector('.question').classList.remove('hidden');
        img.src="img/black.PNG"
      })



