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

//fist check for the name input, if the name input is okay go on to check for the email input, but if its not okay send out a message inform the use of it.

//secondly if the name is fine check for the email, if the email is okay go on to check for the password, but if the email is not okay send out a message to the user.

//thirdly if the pasword is fine inform the user of submission, but if its not fine then send out a mesaeg to the user.




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

    //we create a patern variable 
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