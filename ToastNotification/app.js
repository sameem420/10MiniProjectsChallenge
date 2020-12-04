const btnToast = document.getElementById("btnToast");
const divWrapper = document.getElementById("wrapper");

btnToast.addEventListener('click', () => {
    generateNotification();
});

function generateNotification() {
    const notification = document.createElement('div');
    notification.classList.add('toast');

    notification.innerText = "Hi There, I am a Toast!";
    divWrapper.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}