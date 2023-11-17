function check(el){
    var user = el.Username.value;
    var pass = el.password.value;
 var error = "";
if (user.length <= 2){
    error = "Username must be longer!"
}
else if (pass.length < 8){
    error = "Password less then 8 symbols!"
}

if (error != ""){
    document.getElementById("error").innerText = error;
    return false;
}

document.getElementById("error").innerText = "";
window.location = "https://kitukl.github.io/my-ooei-project.github.io/main.html"
return false
}