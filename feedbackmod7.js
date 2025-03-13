// Function to validate fields using loops
function validateFields() {
    let isValid = true;
    const fields = ["name", "email"];
    
    fields.forEach((field) => {
        let value = document.getElementById(field).value.trim();
        if (value === "") {
            console.error(`Error: ${field} cannot be empty.`);
            alert(`Please enter your ${field}.`);
            isValid = false;
        }
    });

    const email = document.getElementById("email").value.trim();
    if (!email.includes("@")) {
        console.error("Error: Invalid email format.");
        alert("Please enter a valid email address.");
        isValid = false;
    }

    let rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        console.error("Error: Rating is required.");
        alert("Please select a rating between 1 and 5.");
        isValid = false;
    }

    return isValid;
}

// Function to handle form submission
function submitFeedback(event) {
    event.preventDefault(); // Prevent default form submission
    console.log("Submit button clicked!"); // Debugging log

    if (!validateFields()) {
        console.log("Validation failed. Form submission stopped.");
        return; // Stop execution if validation fails
    }

    let userName = document.getElementById("name").value.trim();
    let userEmail = document.getElementById("email").value.trim();
    let satisfactionChoice = document.querySelector('input[name="satisfaction"]:checked')?.value;
    let ratingElement = document.querySelector('input[name="rating"]:checked');
    let comments = document.getElementById("comments").value.trim();

    if (!satisfactionChoice) {
        console.error("Error: Satisfaction choice is not selected.");
        alert("Please select your satisfaction level.");
        return;
    }

    if (!ratingElement) {
        console.error("Error: Rating is not selected.");
        alert("Please select a rating between 1 and 5.");
        return;
    }

    let ratingValue = parseInt(ratingElement.value);

    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log("Satisfaction:", satisfactionChoice);
    console.log("Selected Rating:", ratingValue);
    console.log("Additional Comments:", comments);

    // Show a confirmation prompt before final submission
    let confirmSubmission = confirm(`Are you sure you want to submit the feedback?\n\nName: ${userName}\nEmail: ${userEmail}\nRating: ${ratingValue}\nComments: ${comments}`);
    
    if (confirmSubmission) {
        alert(`Thank you for your feedback, ${userName}!\nYour response has been submitted successfully.`);
        document.getElementById("feedbackForm").reset(); // Reset form after submission
    } else {
        console.log("User canceled the submission.");
    }
}

// Attach event listener when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded. Attaching event listener to submit button.");
    document.getElementById("feedbackForm").addEventListener("submit", submitFeedback);
});


// Function to handle rating changes dynamically
function handleRatingChange() {
    let selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        document.getElementById("ratingMessage").textContent = `Thank you for rating us: ${selectedRating.value}`;
    }
}

// Function to reset form fields
function resetForm() {
    document.getElementById("ratingMessage").textContent = "";
    console.log("Form reset.");
}

// Attach event listeners
document.getElementById("feedbackForm").addEventListener("submit", submitFeedback);
document.getElementById("resetButton").addEventListener("click", resetForm);
document.getElementById("ratingGroup").addEventListener("change", handleRatingChange);
