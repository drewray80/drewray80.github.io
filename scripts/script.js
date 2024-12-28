document.addEventListener('DOMContentLoaded', () =>{
    // Select all dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle')

    dropdownToggles.forEach(toggle =>{
        toggle.addEventListener('click', ()=>{
            const dropdownMenu = toggle.nextElementSibling

            if (dropdownMenu.classList.contains('hidden')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu =>{
                    menu.classList.add('hidden')
                })
                dropdownMenu.classList.remove('hidden')
            } else {
                dropdownMenu.classList.add('hidden')
            }
        })
    })

    // Clicking outside an open menu closes it.
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (!menu.contains(event.target)) {
                    menu.classList.add('hidden')
                }
            })
        }
    })

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button')
    const mobileMenu = document.querySelector('.navigation-menu')

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
    })

})