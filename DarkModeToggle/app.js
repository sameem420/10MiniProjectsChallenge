const toggler = document.getElementById('toggle');

toggler.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked);
})