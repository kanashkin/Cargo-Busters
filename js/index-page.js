const stockSwiper = new Swiper('.stock-swiper', {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.stock-swiper-right',
        prevEl: '.stock-swiper-left',
    },
})

const autoSwiper = new Swiper('.auto-swiper', {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.auto-swiper-right',
        prevEl: '.auto-swiper-left',
    },
})

const collapse = () => {
    const triggerBtns = document.querySelectorAll('.collapse__block__wrapper')

    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            const currentBlock = item.closest('.collapse__block')
            currentBlock.classList.toggle('active')
        })
    })
}

collapse()

const servicesCards = () => {
    const servicesCardContents = document.querySelectorAll('.services-card__content')
    let heights = []

    servicesCardContents.forEach(item => {
        let blockHeight = item.clientHeight
        heights.push(blockHeight)
    })

    let highest = Math.max.apply(null, heights)

    servicesCardContents.forEach(item => {
        if(item.closest('.services-content__block').classList.contains('active')) {
            item.style.minHeight = highest + 'px'
        }
    })
}

servicesCards()

document.querySelectorAll('.services-tab').forEach(item => {
    item.onclick = function() {
        servicesCards()
    }
})

window.addEventListener('resize', () => {
    servicesCards()
})