const button = document.querySelector('#enter');

const login = document.querySelector('.log');
const password = document.querySelector('.pas');

const trulog = 'turon'
const trupass = 1234

function checkLogin() {

    if (login.value == '' && password.value == '') {
        alert('There is nothing!')
    }
    else if (login.value == trulog && password.value == trupass) {
        document.querySelector('.photo').style.display ='block'
        alert('Right!')
    }
    else {
        alert('Wrong!')
    }
}

button.addEventListener('click', checkLogin)
