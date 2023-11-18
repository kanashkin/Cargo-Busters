const stockSwiper = new Swiper('.stock-swiper', {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.stock-swiper-right',
        prevEl: '.stock-swiper-left',
    },
})

const autoSwiper = new Swiper('.auto-swiper', {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.auto-swiper-right',
        prevEl: '.auto-swiper-left',
    },
})

const collapse = () => {
    const triggerBtns = document.querySelectorAll('.collapse__block-trigger')

    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            const currentBlock = item.closest('.collapse__block')
            currentBlock.classList.toggle('active')
        })
    })
}

collapse()