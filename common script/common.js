var gettingcurrentuser = JSON.parse(localStorage.getItem("currentuser"));
gettingcurrentuser.map(function(el) {
    if (el.name == null) {
        document.querySelector(".login-then-show-name").style.display = "none";
        document.querySelector(".conditional-thin-if-not-login").style.display = "block";
        document.querySelector("#logoutuser").style.display = "none";

    } else {
        document.querySelector(".login-then-show-name").innerText = `Welcome ${el.name}`;
        document.querySelector(".conditional-thin-if-not-login").style.display = "none";
        document.querySelector("#logoutuser").style.display = "block";
        console.log(el.name);
    }
});


document.querySelector("#logoutuser").addEventListener("click", logoutcurrentuser);

function logoutcurrentuser() {
    gettingcurrentuser.map(function(el, i) {
        gettingcurrentuser.splice(i, 10000);
        window.location.reload();
        localStorage.setItem("currentuser", JSON.stringify(gettingcurrentuser));
    });

}