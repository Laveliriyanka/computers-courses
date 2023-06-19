let inputModal = '12345';
let isDisabledButton = true;

function openModal() {
    document.getElementById('modal-course').classList.add('open');

}

function closeModal() {
    document.getElementById('modal-course').classList.remove('open');
}

function openModalTeacher(teacher) {
    document.getElementById(teacher).classList.add('open');
}

function closeModalTeacher(teacher) {
    document.getElementById(teacher).classList.remove('open');
}

input.onblur = function() {
    if (!input.value.includes('@')) { 
        input.classList.add('invalid');
        isDisabledButton = true;
        error.innerHTML = 'Пожалуйста, введите правильный email.'
    }
    inputModal = input.value;
};

input.onfocus = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        isDisabledButton = false;
        error.innerHTML = "";
    }
};

function modalOpenNotification() {
    if (!isDisabledButton) {
        success.innerHTML = `<p>Success! ${inputModal}</p>`;
        document.getElementById('success').classList.add('open');
        setTimeout(() => document.getElementById('success').classList.remove('open'), 2000)
    }
}
