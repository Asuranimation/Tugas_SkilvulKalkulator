function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Masukkan berat badan dan tinggi badan yang valid.");
        return;
    }

    var bmi = weight / Math.pow(height / 100, 2);
    var status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obesity";
    }

    var resultText = "BMI = " + bmi.toFixed(1) + "<br>BMI Categories: " + status;
    document.getElementById("result").innerHTML = resultText;
}

document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
