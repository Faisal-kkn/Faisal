let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('empty_notice');
let msgSuccess = document.getElementById('alert-success');

function validateName(){
    let name = document.getElementById('name').value;
    if (name.length == 0) {
        document.getElementById('name-error').style.color = 'red';
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (name.match(' '+' ')) {
        document.getElementById('name-error').style.color = 'red';
        nameError.innerHTML = 'space is two';
        return false;
    }

    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        document.getElementById('name-error').style.color = 'red';
        nameError.innerHTML = 'Write full name';
        return false;
    }

    document.getElementById('name-error').style.color = 'green';
    nameError.innerHTML = 'Valid Name';    
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;
    if (email.length == 0) {
        document.getElementById('email-error').style.color = 'red';
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        document.getElementById('email-error').style.color = 'red';
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    document.getElementById('email-error').style.color = 'green';
    emailError.innerHTML = 'Valid Email';    
    return true;
}

function validatePhone() {
    let phone = document.getElementById('tel').value;

    if (phone.length == 0) {
        document.getElementById('phone-error').style.color = 'red';
        phoneError.innerHTML = 'Phone is required';
        return false;
    }

    if (phone.length !== 10) {
        document.getElementById('phone-error').style.color = 'red';
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        document.getElementById('phone-error').style.color = 'red';
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    document.getElementById('phone-error').style.color = 'green';
    phoneError.innerHTML = 'Valid Phone';
    return true;
}

function validateMessage(){
    let message = document.getElementById('message').value;
    let required = 20;
    let left = required - message.length;

    if (left > 0) {
        document.getElementById('message-error').style.color = 'red';
        messageError.innerHTML = left + 'More charector required';
        return false;
    }

    document.getElementById('message-error').style.color = 'green';
    messageError.innerHTML = 'Valid Phone';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fill Required Fields';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    } else {
        msgSuccess.innerHTML = 'This is a success alert—check it out!';
        // msgSuccess.style.display = 'none';
        setTimeout(function () { msgSuccess.style.display = 'block'; }, 3000);
    }

    
}