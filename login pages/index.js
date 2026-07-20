// ==========================
// SHOW / HIDE PASSWORD
// ==========================

let passwordInput = document.getElementById("password");
let showPasswordBtn = document.getElementById("showPassword");

showPasswordBtn.onclick = function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        showPasswordBtn.innerText = "Hide";

    } else {

        passwordInput.type = "password";
        showPasswordBtn.innerText = "Show";

    }

};


// ==========================
// CAPS LOCK WARNING
// ==========================

passwordInput.addEventListener("keyup", function (e) {

    let warning = document.getElementById("capsWarning");

    if (e.getModifierState("CapsLock")) {

        warning.style.display = "block";

    } else {

        warning.style.display = "none";

    }

});


// ==========================
// LOGIN FUNCTION
// ==========================

function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    let loginText = document.getElementById("loginText");
    let loading = document.getElementById("loading");


    // CHANGE USERNAME & PASSWORD HERE

    if (username === "admin" && password === "123456") {

        // SHOW LOADING

        loginText.classList.add("hidden");
        loading.classList.remove("hidden");


        // WAIT FOR 2 SECONDS

        setTimeout(function () {

            // OPEN DASHBOARD

            window.location.href = "dashboard.html";

        }, 2000);

    }

    else {

        alert("Invalid Username or Password.");

    }

}


// ==========================
// LOGIN BUTTON
// ==========================

let loginButton = document.getElementById("loginBtn");

loginButton.onclick = function () {

    login();

};


// ==========================
// ENTER KEY SUPPORT
// ==========================

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        login();

    }

});