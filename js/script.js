//Authentication
document.getElementById('loginButton').addEventListener('click', function () {

    const email = document.getElementById('emailField');
    const password = document.getElementById('passwordField');

    if (email.value == 'arfin@mail.com' && password.value == 'secret') {
       window.location.href = "banking.html";
    }
    else {
        alert('Please Give Valid Information');
    }
})