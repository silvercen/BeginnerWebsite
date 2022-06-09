const form = document.getElementById("form");
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');

    errorDisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');

}

const setSuccess = element => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');

    errorDisplay.innerText = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

const isValidEmail = element => {
    const at = element.indexOf('@');
    if(at < 1){
        return false;
    }

    const dot = element.indexOf('.');
    if(dot <= at+2){
        return false;
    }

    if(dot === element.length-1){
        return false;
    }

    return true;
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is required');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    }
    else if (isValidEmail(emailValue)==false){
        setError(email, 'Provide a valid email address');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }
    else if(passwordValue.length < 8){
        setError(password, 'Password should be atleast 8 characters')
    }
    else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Rewrite password is required');
    }
    else if(password2Value.length < 8){
        setError(password2, 'Password should be atleast 8 characters')
    }
    else if(password2Value !== passwordValue){
        setError(password2, 'Passwords do not match');
    }
    else{
        setSuccess(password2);
    }
}