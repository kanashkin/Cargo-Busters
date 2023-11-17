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

const servicesTabs = () => {
    const triggerBtns = document.querySelectorAll('.services-tab')
    const contentBlocks = document.querySelectorAll('.services-content__block')

    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            triggerBtns.forEach(item => {
                item.classList.remove('active')
            })

            contentBlocks.forEach(item => {
                item.classList.remove('active')
            })

            item.classList.add('active')
            let blockId = item.getAttribute('data-tab')
            let block = document.querySelector(blockId)
            block.classList.add('active')
        })
    })
}

servicesTabs()

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