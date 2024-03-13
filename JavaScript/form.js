//main function for validating our html form field inputs
function validateForm(){
    //first check for the name field if the function returns true go to the email check and so on
    if (nameCheck(document.form1.fname.value)){
        if(emailCheck(document.form1.email.value)){
            if(pwdCheck(document.form1.password.value)){
                //finally if all the fields are occupied give submission feedback
                document.getElementById("msgBox").innerText = "Your form has been succesfully submited";
            }
        }
    }
    return true;
}

//function for checking the name field if its not empty
function nameCheck(x){
    if (x === "" || x === null){
        document.getElementById("msgBox").innerText = "Please input your name";
        return false;
    }else{
        return true;
    }
}
// function for checking the email field if its correct
function emailCheck(input){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input.match(validRegex)){
        document.getElementById("msgBox").innerText = "email is okay";
        return true;
    }else{
        document.getElementById("msgBox").innerText = "recheck your email";
        return false;
    }
}

//function for checking the pasword field if its not empty
function pwdCheck(x){
    if (x === "" || x === null){
        document.getElementById("msgBox").innerText = "Please input your password";
        return false;
    }else{
        return true;
    }
}