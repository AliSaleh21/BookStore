window.onload = function () {
    document.getElementById("Contactform").addEventListener("submit", function(event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();

        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");

        let isValid = true;

        
        nameError.textContent = "";
        emailError.textContent = "";

        // To add name requirment 

        if (name === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        }

        // To Add email requirment and its should contains "@" and ".")
        if (email === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!email.includes("@") || !email.includes(".")) {
            emailError.textContent = "Invalid email format.";
            isValid = false;
        }
// Cant submit without email and name requirment 
        if (!isValid) {
            event.preventDefault(); 
        }
    });
};

//To add javascript quiz including element and feedback 

function checkAnswer(option, correctAnswer) {
    let feedbackElement = document.getElementById("feedback-" + option.name);
    if (option.value === correctAnswer) {
        feedbackElement.textContent = "Excellent,Correct answer!";
        feedbackElement.style.color = "green";
        
    } else {
        feedbackElement.textContent = " Incorrect answer, try again.";
        feedbackElement.style.color = "red";
    }
}