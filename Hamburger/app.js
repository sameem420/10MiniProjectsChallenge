let navWrapper = document.querySelector('.nav-wrapper'),
navToogler =  document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active')
})