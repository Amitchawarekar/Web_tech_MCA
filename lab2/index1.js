const fname = document.getElementById("fname");
const mname = document.getElementById("mname");
const lname = document.getElementById("lname");

const email = document.getElementById("email");
const userid = document.getElementById("userid");
const passwd = document.getElementById("passwd");
const cpasswd = document.getElementById("cpasswd");

function validate() {
    validateName();
    validateEmail();
    validatePassword();
}

function reset() {
    fname.value = "";
    mname.value = "";
    lname.value = "";
    email.value = "";
    userid.value = "";
    passwd.value = "";
    cpasswd.value = "";
}

function validatePassword() {
    password = passwd.value;
    confirmPassword = cpasswd.value;

    if (password != confirmPassword) {
        const warning = document.getElementById("span-cpasswd");
        warning.innerHTML = "*Password does not match!";
    } else {
        document.getElementById("span-cpasswd").innerHTML = "";
    }

    let isSmallCase = false;
    let isCaptialCase = false;
    let isNumber = false;
    let isSpecialCharacter = false;
    
    for (let i = 0; i < password.length; i++) {
        let c = password.charAt(i);
        if(c >= 'a' && c <= 'z') {
            isSmallCase = true;
        }
        
        if (c >= 'A' && c <= 'Z') {
            isCaptialCase = true;
        }
        
        if (c >= '0' && c <= '9') {
            isNumber = true;
        }
        
        if (c == '@' || c == '#' || c == '$' || c == '&') {
            isSpecialCharacter = true;
        }
    }

    if (!isSmallCase || !isCaptialCase || !isNumber || !isSpecialCharacter) {
        const warning = document.getElementById("span-passwd");
        warning.innerHTML = "*Password should contain atleast one small, capital, number and special character!";
    }
}

function validateEmail() {
    const Email = email.value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!Email.match(validRegex)) {
        const warning = document.getElementById("span-email");
        warning.innerHTML = "*Enter a valid Email Address";
    } else {
        document.getElementById("span-email").innerHTML = "";
    }
}

function validateName() {
    const firstName = fname.value;
    const middleName = mname.value;
    const lastName = lname.value;
    
    let err = "*Cannot be empty or have a number!"
    nameError(firstName, "span-fname", err);
    nameError(middleName, "span-mname", err);
    nameError(lastName, "span-lname", err);
}

function nameError(text, id, err) {
    text = text.trim();
    if(text == "" || !isNaN(text)) {
        const warning = document.getElementById(id);
        warning.innerHTML = err;
    } else {
        document.getElementById(id).innerHTML = "";
    }
}