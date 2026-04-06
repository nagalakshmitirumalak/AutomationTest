function isValidEmail(email: string): boolean{
    if(email.includes("@")){
        let emailSplitted = email.split("@");
        if(emailSplitted[1]!.includes(".")){
            return true;
        }
    }
    return false;
}

const emailString: string = "lakshmi@gmail.com";
const IsEmailValid = isValidEmail(emailString);
console.log(`${emailString}, is Valid Email : ${IsEmailValid}`);