const menuDropdown = () => {
    const triggerBtn = document.querySelector('.service-menu-item')
    const menuItems = document.querySelectorAll('.menu__list-item')
    const menuBlock = document.querySelector('.submenu')

    triggerBtn.addEventListener('click', e => {
        e.preventDefault()
        triggerBtn.classList.toggle('active')
        menuBlock.classList.toggle('active')
    })
}

menuDropdown()