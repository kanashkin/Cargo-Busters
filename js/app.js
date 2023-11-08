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
        nextEl: '.swiper-right',
        prevEl: '.swiper-left',
    },
})