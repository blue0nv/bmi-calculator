const resultShape = document.querySelector(".result");
const calculateButton = document.querySelector("#calculate");
const inputs = document.querySelectorAll("input")

inputs.forEach(input => 
    {
        input.addEventListener("input", () => 
        {
            calculateButton.style.backgroundColor = "black";
            calculateButton.textContent = "Calculate";
            resultShape.style.visibility = "hidden";
        });
    });

calculateButton.addEventListener("click", () =>
{
    if (isValid())
    {
        calculateButton.style.backgroundColor = "green";
        calculateButton.textContent = "Valid";
    }
    else
    {
        calculateButton.style.backgroundColor = "red";
        calculateButton.textContent = "Invalid";
    }
});

function isValid()
{
    const height = Number(document.querySelector("#height").value.trim());
    const weight = Number(document.querySelector("#weight").value.trim());
    
    if (!Number.isNaN(height) && !Number.isNaN(weight))
    {
        if (height >= 1 && height <= 2.5 && weight >= 1 && weight <= 200)
        {
            return true;
        }
    }
    return false;
}

function calculateBMI() 
{
    const bmi = weight / (height * height);
    document.getElementById("result").textContent = "BMI: " + bmi.toFixed(2);
}

inputs.addEventListener("keydown", () =>
{

});