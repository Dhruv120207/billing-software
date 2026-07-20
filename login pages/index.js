// SHOW PASSWORD


let password = document.getElementById("password");

let button = document.getElementById("showPassword");


button.onclick = function(){


if(password.type==="password"){

    password.type="text";
    button.innerText="Hide";

}

else{

    password.type="password";
    button.innerText="Show";

}

}



// CAPS LOCK WARNING


password.addEventListener("keyup",function(e){

let warning=document.getElementById("capsWarning");


if(e.getModifierState("CapsLock")){

warning.style.display="block";

}

else{

warning.style.display="none";

}

});




// LOGIN BUTTON


let loginButton=document.getElementById("loginBtn");


loginButton.onclick=function(){


let text=document.getElementById("loginText");

let loading=document.getElementById("loading");


text.classList.add("hidden");

loading.classList.remove("hidden");


setTimeout(function(){

    text.classList.remove("hidden");
    loading.classList.add("hidden");

    alert("Login Successfully!");

},2000);


};




// ENTER BUTTON SUPPORT


document.addEventListener("keydown",function(event){

if(event.key==="Enter"){

    loginButton.click();

}

//function login 

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if(username === "admin" && password === "123456"){

        window.location.href = "dashboard.html";

    }

    else{

        alert("Invalid Username or Password.");

    }

}

});