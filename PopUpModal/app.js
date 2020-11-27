const btnOpenModal = document.getElementById('btnOpenModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const modalContainer = document.getElementById('popup-container');

btnOpenModal.addEventListener('click', () => {
    modalContainer.classList.add('active');
});

btnCloseModal.addEventListener('click', () => {
    modalContainer.classList.remove('active');
});    