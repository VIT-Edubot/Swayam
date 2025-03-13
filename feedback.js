let userName = "";
let userEmail = "";
const isSatisfied = false; 

function validateForm(event) {
    event.preventDefault();
    userName = document.getElementById("name").value.trim();
    userEmail = document.getElementById("email").value.trim();
    let satisfactionChoice = document.querySelector('input[name="satisfaction"]:checked');
    let feature1 = parseInt(document.getElementById("feature1").value) || 0;
    let feature2 = parseInt(document.getElementById("feature2").value) || 0;
    let feature3 = parseInt(document.getElementById("feature3").value) || 0;
    if (userName === "") {
        console.error("Error: Name field cannot be empty.");
        alert("Please enter your name.");
        return;
    }

    if (!userEmail.includes("@")) {
        console.error("Error: Invalid email format.");
        alert("Please enter a valid email address.");
        return;
    }

    if (!satisfactionChoice) {
        console.error("Error: Satisfaction choice is required.");
        alert("Please select whether you are satisfied with the updates.");
        return;
    }

    // Convert satisfactionChoice value to boolean
    const isSatisfied = satisfactionChoice.value === "yes";

    // Calculate total score
    let totalScore = calculateTotalScore(feature1, feature2, feature3);
    let averageScore = calculateAverageScore(totalScore, 3);

    // Debugging output
    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log("User Satisfaction:", isSatisfied);
    console.log("Total Score:", totalScore);
    console.log("Average Score:", averageScore);

    // Successful form submission message
    alert(`Thank you for your feedback!\nTotal Score: ${totalScore}\nAverage Score: ${averageScore}`);
}

// Function to calculate total score
function calculateTotalScore(f1, f2, f3) {
    return f1 + f2 + f3;
}

// Function to calculate average score
function calculateAverageScore(total, numFeatures) {
    return total / numFeatures; // Return average score
}

// Attach event listener to form
document.getElementById("feedbackForm").addEventListener("submit", validateForm);
