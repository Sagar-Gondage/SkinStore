var redirectregister = document.querySelector("#redirectRegister").addEventListener("click", timemachine);
var collectregistereddata = JSON.parse(localStorage.getItem("registereduser"));

function timemachine() {
    window.location.href = "../register/register.html";
}
var loginuserdetails = document.querySelector("form").addEventListener("submit", loginfunc);
var currentuser = [];

function loginfunc() {
    event.preventDefault();
    var useremail = document.querySelector("#email").value;
    var userpassword = document.querySelector("#password").value;
    var dangeremail = document.querySelector(".email");
    var dangerpassword = document.querySelector(".password");
    var dangernotexist = document.querySelector(".notexist");
    collectregistereddata.map(function(el) {

        if (el.email == useremail && el.password == userpassword) {
            alert("login sucessfull press ok to shopping")
            window.location.href = "../index.html";
            currentuser.push(el);
            localStorage.setItem("currentuser", JSON.stringify(currentuser));

        }
        if (el.email != useremail && el.password != userpassword) {
            dangernotexist.style.display = "block";

        } else {
            dangernotexist.style.display = "block";

        }
        if (useremail == "") {
            dangeremail.style.display = "block";
        } else {
            dangeremail.style.display = "none";
        }
        if (userpassword == "") {
            dangerpassword.style.display = "block";
        } else {
            dangerpassword.style.display = "none";
        }
    });
}



document.querySelector(".image-wala-part").addEventListener("click", gotmainpage);

function gotmainpage() {
    window.location.href = "../index.html";
}