// SHOW PASSWORD

let password = document.getElementById("password");
let button = document.getElementById("showPassword");

button.onclick = function () {

    if (password.type === "password") {

        password.type = "text";
        button.innerText = "Hide";

    } else {

        password.type = "password";
        button.innerText = "Show";

    }

};


// CAPS LOCK WARNING

password.addEventListener("keyup", function (e) {

    let warning = document.getElementById("capsWarning");

    if (e.getModifierState("CapsLock")) {

        warning.style.display = "block";

    } else {

        warning.style.display = "none";

    }

});



// LOGIN FUNCTION

function login() {

    let username = document.getElementById("username").value.trim();
    let passwordValue = document.getElementById("password").value;

    if (username === "admin" && passwordValue === "123456") {

        let text = document.getElementById("loginText");
        let loading = document.getElementById("loading");

        text.classList.add("hidden");
        loading.classList.remove("hidden");

        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 2000);

    }

    else {

        alert("Invalid Username or Password.");

    }

}



// LOGIN BUTTON

let loginButton = document.getElementById("loginBtn");

loginButton.onclick = function () {

    login();

};


// ENTER BUTTON SUPPORT

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        login();

    }

});