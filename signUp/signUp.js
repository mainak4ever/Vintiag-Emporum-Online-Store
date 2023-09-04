// const CryptoJS = require('crypto-js');
$(document).ready(function () {
    // Handle form submission
    $("#registrationForm").submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get user input
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const phoneNumber = $("#phoneNumber").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const encryptedPass = encryptData(password);

        // Create an object with user details
        const profile = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: encryptedPass
        };

        localStorage.setItem("profile", JSON.stringify(profile))

        localStorage.setItem('isLoggedIn', JSON.stringify(true))

        alert("Sign Up Successful")
        location.href = "../index.html";

    });

    function encryptData(data) {
        const secretKey = 'Mainak Mitra';
        // console.log(data)
        // Encrypt the data with AES encryption and the provided secret key
        const cipherText = CryptoJS.AES.encrypt(data, secretKey).toString();
        // console.log(cipherText)
        return cipherText;
    }

});