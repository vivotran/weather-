var unameInput = document.getElementById ('unameId');
var passwordInput = document.getElementById ("pwdId");
var signUpBtn = document.getElementById ("signup-btn");
var cPassword = document.getElementById ("cpwdId");

console.log(unameInput);

function SignUp(){
    var username = unameInput.value;
    var password = passwordInput.value;
    var cPass = cPassword.value; 

    if ( username == "" || password == ""){
        
        alert("try again"); 
    }
    else if (password == cPass){
        var newObj = {
            name: username,
            password: password,
        }
        var newJSON = JSON.stringify(newObj);
        localStorage.setItem("tk_"+username, newJSON);
        alert ("dang ky thanh cong");
        window.location.href = "login.html"; 
    }
    else {
        alert("dang ky that bai");
    }
}

// sign in
function SignIn () {
    var ndTKLogin = document.getElementById ("unameId").value; 
    var ndMkLogin = document.getElementById ("pwdId").value;
    var checkJSON = localStorage.getItem ("tk_"+ndTKLogin);

console.log(ndTKLogin)
if (checkJSON !=null){
    var checkObj = JSON.parse (checkJSON);
    if (ndMkLogin == checkObj.password){
        alert("congradulation!"); 
    window.location.href = "index.html";
    }
    else{
        alert ("sign in failure");
    }
}else {
    alert("account not found!!!")
}
}

//log out
function SignOut (){
    window.location.href = "login.html";
}
