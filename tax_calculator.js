// Function to handle the calculation
const error_message = document.getElementById("error_message");

const processEntries = () => {
    // Get the input elements
    const saleInput = document.getElementById("sale");
    const taxInput = document.getElementById("tax");
    const totalInput = document.getElementById("total");

    const sale = parseFloat(saleInput.value);
    const taxRate = parseFloat(taxInput.value);
    error_message.textContent = "";

    // Validation
    if (isNaN(sale) || sale <= 0) {
        error_message.textContent = "Please enter a valid number greater than zero for Sale Amount.";
        saleInput.focus();
    } else if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 100) {
        error_message.textContent = "Please enter a valid number greater than zero and less than 100 for Tax Rate.";
        taxInput.focus();
    } else {
        // Calculation
        const taxAmount = (sale * taxRate / 100);
        const total = sale + taxAmount;
        totalInput.value = total.toFixed(2);
    }
};

// Function to clear all fields
const clearEntries = () => {
    document.getElementById("sale").value = "";
    document.getElementById("tax").value = "";
    document.getElementById("total").value = "";
    error_message.textContent = "";
    document.getElementById("sale").focus();
};

// Attach events when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculate_btn").addEventListener("click", processEntries);
    document.getElementById("clear_btn").addEventListener("click", clearEntries);
});
