function calculateBMI() {

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (height === "" || weight === "") {
        result.innerHTML = "⚠ Please enter height and weight.";
        return;
    }

    const h = height / 100;
    const bmi = (weight / (h * h)).toFixed(1);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi < 25) {
        status = "Healthy Weight ✅";
    } else if (bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    result.innerHTML = `Your BMI: <b>${bmi}</b><br>${status}`;
}