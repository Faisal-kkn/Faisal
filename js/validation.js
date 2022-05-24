let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('empty_notice');
let msgSuccess = document.getElementById('alert-success');

function validateName(){
    let name = document.getElementById('name').value;
    document.getElementById('name-error').style.color = 'red';
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (name.match(' '+' ')) {
        nameError.innerHTML = 'space is two';
        return false;
    }

    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = '';    
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;
    document.getElementById('email-error').style.color = 'red';
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    emailError.innerHTML = '';    
    return true;
}

function validatePhone() {
    let phone = document.getElementById('tel').value;

    document.getElementById('phone-error').style.color = 'red';
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '';
    return true;
}

function validateMessage(){
    let message = document.getElementById('message').value;
    let required = 20;
    let left = required - message.length;
    document.getElementById('message-error').style.color = 'red';

    if (left > 0) {
        messageError.innerHTML = left + 'More charector required';
        return false;
    }

    messageError.innerHTML = '';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fill Required Fields';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    } else {
        msgSuccess.style.display = 'block';
        msgSuccess.innerHTML = 'This is a success alert—check it out!';
    }

    
}