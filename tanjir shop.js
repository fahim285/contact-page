function validateForm() {
    var username = document.getElementById("username").value;
    var emailAddress = document.getElementById("email-address").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;

    var usernameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    var phoneNumberRegex = /^07\d{8}$/; // 10 digits for phone number starting with "07"
    var passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[^\da-zA-Z]).{8,}$/; // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character
    var dateOfBirthLimit = new Date('2004-01-01'); // Date limit for 2004

    if (!usernameRegex.test(username)) {
        alert('Please enter a valid username with at least 3 characters.');
        return false;
    }
    if (!emailRegex.test(emailAddress)) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (!phoneNumberRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number starting with "07".');
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert('Please enter a valid password with at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }
    if (new Date(dateOfBirth) > dateOfBirthLimit) {
        alert('Date of birth should not be later than 2004.');
        return false;
    }

    simulateSuccessfulLogin(username);
    return true;
}

function simulateSuccessfulLogin(username) {
    console.log("User " + username + " successfully logged in!");
    alert("Welcome, " + username + "! You have successfully logged in.");
}