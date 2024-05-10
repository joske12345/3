window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calcBmi);
};

function calcBmi() {
        let height = parseInt(document.querySelector("#height").value);
        let weight = parseInt(document.querySelector("#weight").value);
        let answer = document.querySelector("#answer");

        if (height === "0" || height == 0 || isNaN(height)) answer.innerText = "Provide a valid Height!";
        else if (weight === "0" || weight == 0 || isNaN(weight)) answer.innerText = "Provide a valid Weight!";
        else {
            let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
            if (bmi < 18.5) answer.innerHTML = `Underweight : <span>${bmi}</span>`;
            else if (bmi >= 18.5 && bmi < 24.9) answer.innerHTML = `Healthy : <span>${bmi}</span>`;
            else if (bmi >=  24.9 && bmi < 29.9) answer.innerHTML= `Overweight : <span>${bmi}</span>`;
            else answer.innerHTML = `Obese : <span>${bmi}</span>`;
            }
        }