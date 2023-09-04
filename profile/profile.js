$(document).ready(function () {
    var isLoggedIn = JSON.parse(window.localStorage.getItem('isLoggedIn'))
    if (isLoggedIn == null || isLoggedIn == false) {
        window.location.replace('../index.html')
    } else {
        const user = JSON.parse(localStorage.getItem("profile"));
        displayUserDetails(user)

        // Function to display user details
        function displayUserDetails(user) {
            const userDetailsContainer = $("#userDetails");
            userDetailsContainer.html("");

            const userHtml = `
            <h2>Name: ${user.firstName} ${user.lastName}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone Number: ${user.phoneNumber}</p>
            <p id = 'passwordId'>Password : ******************  <a id = "pass-btn" class ='hidden'><i class="fa-solid fa-eye"></i></a></p>
        `;

            userDetailsContainer.html(userHtml);
        }

        $(document).on("click", "#pass-btn", function () {
            // console.log("clicked")
            if ($('#pass-btn').hasClass('hidden')) {
                var pass = decryptData(user.password);
                $('#passwordId').html(`Password : ${pass}  <a id = "pass-btn" class ='shown'><i class="fa-solid fa-eye"></i></a>`)
            } else {
                $('#passwordId').html(`Password : ******************  <a id = "pass-btn" class ='hidden'><i class="fa-solid fa-eye-slash"></i></a>`)
            }
        })

        function decryptData(cipherText) {
            // Decrypt the ciphertext using the same secret key
            const secretKey = 'Mainak Mitra'
            const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
            const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            // console.log(decryptedData)
            return decryptedData;
        }


    }
});