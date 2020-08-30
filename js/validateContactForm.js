const submitBtn = document.getElementById('submitBtn');

submitBtn.disabled = true;

// Input fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

// Validation colors
const green = '#36c73b';
const red = '#ec2719';
// Error Messages
const firstNameMessage = document.getElementById('firstNameMessage');
const lastNameMessage = document.getElementById('lastNameMessage');
const emailMessage = document.getElementById('emailMessage');
const subjectMessage = document.getElementById('subjectMessage');
const messageMessage = document.getElementById('messageMessage');

function validateFirstName() {
    // check if is empty
    if(checkIfEmpty(firstName, firstNameMessage)) return;
    // check  if it has only letters
    if(!checkIfOnlyLetters(firstName, firstNameMessage)) return;
    return true;
}

function validateLastName() {
    // check if is empty
    if(checkIfEmpty(lastName, lastNameMessage)) return;
    // check if it has only letters
    if(!checkIfOnlyLetters(lastName, lastNameMessage)) return;
    return true;
}

function validateEmail() {
    // check if empty
    if(checkIfEmpty(email, emailMessage)) return;
    if(matchWithRegEx(email, emailMessage)) return;
    return true;
}

function matchWithRegEx(field, messageElement) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regEx.test(field.value)) {
        setValid(field, messageElement);
        return true;
    } else {
        setInvalid(field, messageElement, `${field.placeholder} muss gültig sein.`)
        return false;
    }
}

function validateSubject() {
    // check if is empty
    if(checkIfEmpty(subject, subjectMessage)) return;
}

function validateMessage() {
    // check if is empty
    if(checkIfEmpty(message, messageMessage)) return;
}

function checkIfEmpty(field, messageElement) {
    if(isEmpty(field.value.trim())) {
        // set field invalid
        setInvalid(field, messageElement, `${field.placeholder} darf nicht leer sein.`)
        return true;
    } else {
        // set field valid
        setValid(field, messageElement);
        return false;
    }
}

function isEmpty(value) {
    if(value === '') return true;
    return false;
}

function setInvalid(field, messageElement, message) {
    field.className = 'invalid';
    messageElement.innerHTML = message;
    field.nextElementSibling.style.color = red;
    check();
}

function setValid(field, messageElement) {
    field.className = 'valid';
    messageElement.innerHTML = '';
    check();
}

function checkIfOnlyLetters(field, messageElement) {
    if(/^[a-zA-Z ]+$/.test(field.value)) {
        setValid(field, messageElement);
        return true;
    } else {
        setInvalid(field, messageElement, `${field.placeholder} darf nur Buchstaben enthalten.`)
    }
}

function check() {
    if(firstName.classList.contains('valid') && lastName.classList.contains('valid') && email.classList.contains('valid') && subject.classList.contains('valid') && message.classList.contains('valid')) {
        submitBtn.disabled = false;
    }
}
