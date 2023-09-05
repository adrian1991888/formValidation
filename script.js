const username = document.querySelector('#username')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const btnSend = document.querySelector('.btn-send')
const btnClear = document.querySelector('.btn-clear')
const popup = document.querySelector('.popup')


const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


//wywołanie przycisku Zarejestruj

const inputs = [username, password, password2, email]

btnSend.addEventListener('click', e => {
    e.preventDefault();
    isEmptyInput()
    comparePass()
    checkPass()
    checkEmail()
    showPopup()
})


//wywołanie przycisku Wyczyść pola

btnClear.addEventListener('click', function(e) {
    e.preventDefault();
    inputs.forEach(el => {
        el.value = ''
        const DomBox = el.nextElementSibling
        DomBox.classList.remove('visibility')
        el.classList.remove('error-input-color')
})
})


function comparePass() {
    if (password.value !== password2.value) {
        const DomBox = password2.parentElement
        const error = DomBox.querySelector('.error-text')
        error.textContent = 'Hasła nie są identyczne.'
        error.classList.add('visibility') 
        password2.classList.add('error-input-color')
    }
}


function isEmptyInput() {
    inputs.forEach(el => {
        if (el.value == '') {
            const DomBox = el.parentElement
            const error = DomBox.querySelector('.error-text')
            error.textContent = 'Uzupełnij pole'
            error.classList.add('visibility') 
            el.classList.add('error-input-color')
        }
        else{
            const DomBox = el.nextElementSibling
            DomBox.classList.remove('visibility')
            el.classList.remove('error-input-color')
        }
    })
}


function checkEmail() {
    const RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (RegExp.test(email.value)) {}
    else{
        const DomBox = email.parentElement
        const error = DomBox.querySelector('.error-text')
        error.textContent = 'Adres email jest nieprawidłowy.'
        error.classList.add('visibility') 
        email.classList.add('error-input-color')
    }
}


function showPopup() {
    let x = []
    inputs.forEach(el => {
    if (el.classList.contains('error-input-color')) {
       x.push(false)
    }
    else{
        x.push(true)    
    }

    if (x[0] == true && x[1] == true && x[2] == true && x[3] == true) {
        popup.classList.add('enable-popup')
    }
})
}

function checkPass() {
        if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers) && password.value.match(special)) {
            const DomBox = password.nextElementSibling
            DomBox.classList.remove('visibility')
            password.classList.remove('error-input-color')
        }
        else{
            const DomBox = password.parentElement
            const error = DomBox.querySelector('.error-text')
            error.textContent = 'Hasło nie spełnia wymogów.'
            error.classList.add('visibility') 
            password.classList.add('error-input-color')
        }

}

















