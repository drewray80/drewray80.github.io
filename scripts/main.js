const initApp = () =>{
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu2 = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu2.classList.toggle('hidden')
        mobileMenu2.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu2.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)