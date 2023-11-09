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

const calc = () => {
    const reverseAddress = () => {
        const triggerBtn = document.querySelector('.arrow__block')
        const fromInput = document.querySelector('.input-from')
        const toInput = document.querySelector('.input-to')

        triggerBtn.addEventListener('click', () => {
            let fromValue = fromInput.value
            let toValue = toInput.value

            fromInput.value = toValue
            toInput.value = fromValue
        })
    }

    const changeMoversAmount = () => {
        const amountInput = document.querySelector('.movers-input')
        const minusBtn = document.querySelector('.calc-minus')
        const plusBtn = document.querySelector('.calc-plus')

        minusBtn.addEventListener('click', () => {
            if (amountInput.value > 0) {
                amountInput.value --
            }
        })

        plusBtn.addEventListener('click', () => {
            if (amountInput.value < 20) {
                amountInput.value ++
            }
        })
    }

    reverseAddress()
    changeMoversAmount()
}

calc()

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