const rightAnswers = ['B', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const output = result.querySelector('span');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    let triedAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    triedAnswers.forEach((answer, index) => {
        if (answer === rightAnswers[index]) {
            score += 25;
            scrollTo(0, 0);
            //output.innerText = score + '%';
            output.textContent = `${score}%`;
            result.classList.remove('d-none');
        }
    })

    let outputCalculator = 0;
    let timer = setInterval(() => {
        output.textContent = `${outputCalculator}%`;
        if (outputCalculator === score) {
            clearInterval(timer);
        }
        else {
            outputCalculator++;
        }

    }, 10);

});
//********************************SetTimeout Method
/* setTimeout(() => {
    alert("hey");
}, 5000); */