

function pageloaded() {

    "use strict";


    var userName = document.getElementById("name");
    var passWord = document.getElementById("password");

    var msgbox = document.getElementById("output");
    var msgbox1 = document.getElementById("output__username");
    var msgbox2 = document.getElementById("output__password");

    if (userName.value === "") {
        userName.style.background = "red";
        userName.focus();
        return false;
    }


    if (passWord.value === "") {
        passWord.style.background = "red";
        passWord.focus();
        return false;
    }

    msgbox.style.display = "block";

    msgbox1.innerHTML = "User Name: " + userName.value;
    msgbox2.innerHTML = "Password: " + passWord.value;

    return false;
}
window.onclick = pageloaded;