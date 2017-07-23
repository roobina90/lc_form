function isEmailValid(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let test = re.test(email);
    return {
        test,
        message: test ? "" : "Email is invalid"
    };
}


function isPasswordValid(pass) {
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let test = re.test(pass);
    return {
        test,
        message: test ? "" : "Password is invalid"
    };
}

export function validateEmailPassword(email, password) {
    let emailValidity = isEmailValid(email);
    let passwordValidity = isPasswordValid(password);
    if(emailValidity.test && passwordValidity.test) {
        return {
            test: true,
            message: "Invalid email or password"
        };
    } else {
        return {
            test: false,
            message: emailValidity.message + " and " + passwordValidity.message
        };
    }
}

export function isTestUser(email, password) {
    return {
        test: email === "test@test.pl" && password === "Password1",
        message: "Login successfull"
    };
}