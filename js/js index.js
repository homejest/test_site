let butLog = document.getElementById('logBut');
let loginInput = document.getElementById('login');
let passwordInput = document.getElementById('password');
let erorMes = document.getElementById('erorMes');
let notMes = document.getElementById('notMes');

let loginTrue = '1234';
let passwordTrue = '5678';

butLog.addEventListener('click', function checkUp() {
    let login = loginInput.value;
    let password = passwordInput.value;

    if (login === '' || password === '') {
        notMes.style.display='block';
        erorMes.style.display = 'none';
    }
    else if (login === loginTrue && password === passwordTrue) {
        window.location.href = 'menu.html';
    } 
    else {
        erorMes.style.display = 'block';
        notMes.style.display='none';
    }
});