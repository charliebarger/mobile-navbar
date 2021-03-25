const plusSign = document.querySelector('.plusSign')
const imageIcons = document.querySelectorAll('img')

function toggleNav() {
    document.querySelector('nav').classList.toggle('closed')
}

imageIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        icon.classList.add('clicked')
        setTimeout(() => {
            toggleNav()
            icon.classList.remove('clicked')
        }, 300)
    })
})

plusSign.addEventListener('click', () => {
    toggleNav()
})
