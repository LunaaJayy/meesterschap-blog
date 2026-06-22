const btnToLight = document.querySelector('.dark-mode')
const btnToDark = document.querySelector('.light-mode')
const body = document.querySelector('body')
const mode = localStorage.getItem('mode')

if (mode === 'dark') {
    body.classList.add('dark')
    btnToDark.style.display = 'none'
    btnToLight.style.display = 'inline-block'
}

btnToDark.addEventListener('click', () => {
    body.classList.add('dark')
    btnToDark.style.display = 'none'
    btnToLight.style.display = 'inline-block'
    localStorage.setItem('mode', 'dark')
})

btnToLight.addEventListener('click', () => {
    body.classList.remove('dark')
    btnToDark.style.display = 'inline-block'
    btnToLight.style.display = 'none'
    localStorage.setItem('mode', 'light')
})