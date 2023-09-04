$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault();

        var email = $("#email").val();
        var pass = $("#password").val();

        var profile = JSON.parse(localStorage.getItem('profile'))

        if (profile.email == email && decryptData(profile.password) == pass) {
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            alert('Logged In Successfully ')
            window.history.back();
        } else {
            alert('Wrong Email or Password')
        }

    });

    function decryptData(cipherText) {
        // Decrypt the ciphertext using the same secret key
        const secretKey = 'Mainak Mitra'
        const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        // console.log(decryptedData)
        return decryptedData;
    }

    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("showPasswordButton");

    showPasswordButton.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPasswordButton.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
        } else {
            passwordInput.type = "password";
            showPasswordButton.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        }
    });
});