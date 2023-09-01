document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("nb");
    const fromUnitSelector = document.getElementById("tempf");
    const toUnitSelector = document.getElementById("tempt");
    const result = document.getElementById("result");

    // Function to perform temperature conversion
    function convertTemperature() {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = tempf.value;
        const toUnit = tempt.value;
        let convertedTemperature;

        if (isNaN(temperature)) {
            result.textContent = "enter a valid number.";
            return;
        }

        if (fromUnit === toUnit) {
            result.textContent = "select different units.";
            return;
        }

        switch (fromUnit) {
            case "C":
                switch (toUnit) {
                    case "F":
                        convertedTemperature = (temperature * 9/5) + 32;
                        break;
                    case "K":
                        convertedTemperature = temperature + 273.15;
                        break;
                    default:
                        result.textContent = "Invalid unit selection.";
                        return;
                }
                break;
            case "F":
                switch (toUnit) {
                    case "C":
                        convertedTemperature = (temperature - 32) * 5/9;
                        break;
                    case "K":
                        convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
                        break;
                    default:
                        result.textContent = "Invalid unit selection.";
                        return;
                }
                break;
            case "K":
                switch (toUnit) {
                    case "C":
                        convertedTemperature = temperature - 273.15;
                        break;
                    case "F":
                        convertedTemperature = ((temperature - 273.15) * 9/5) + 32;
                        break;
                    default:
                        result.textContent = "Invalid unit selection.";
                        return;
                }
                break;
            default:
                result.textContent = "Invalid unit selection.";
                return;
        }

        result.textContent = ` ${convertedTemperature.toFixed(2)}° ${toUnit.toUpperCase()}`;
    }


    temperatureInput.addEventListener("input", convertTemperature);
    fromUnitSelector.addEventListener("change", convertTemperature);
    toUnitSelector.addEventListener("change", convertTemperature);

    convertTemperature();
});
