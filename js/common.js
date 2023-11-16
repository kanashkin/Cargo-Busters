const reviewsSwiper = new Swiper('.reviews-swiper', {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.reviews-swiper-right',
        prevEl: '.reviews-swiper-left',
    },
})


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

const closePopup = () => {
    const closeBtns = document.querySelectorAll('.close-popup')

    closeBtns.forEach(item => {
        item.onclick = function() {
            const currentPopup = item.closest('.popup')
            currentPopup.classList.remove('active')
        }
    })
}

closePopup()