//==========================
// DATE & TIME
//==========================

function updateDateTime() {

    const now = new Date();

    const options = {

        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"

    };

    document.getElementById("dateTime").innerHTML =
        now.toLocaleString("en-IN", options);

}


setInterval(updateDateTime,1000);

updateDateTime();




//==========================
// LOGOUT
//==========================


function logout(){

    let answer = confirm("Are you sure you want to logout ?");

    if(answer){

        // Change login.html if needed.

        window.location.href="login.html";

    }

}