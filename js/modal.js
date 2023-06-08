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

function modalOpenNotification() {
    document.getElementById('success').classList.add('open');
    setTimeout(() => document.getElementById('success').classList.remove('open'), 2000)
}
