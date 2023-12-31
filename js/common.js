const menuDropdown = (triggerSelector) => {
    const triggerBtns = document.querySelectorAll(triggerSelector)

    triggerBtns.forEach(triggerBtn => {
        triggerBtn.addEventListener('click', e => {
            e.preventDefault()
            const menuBlock = triggerBtn.nextElementSibling
            triggerBtn.classList.toggle('active')
            menuBlock.classList.toggle('active')
        })
    })
}

menuDropdown('.service-menu-item>a')
menuDropdown('.footer-service-title')

const burgerMenu = () => {
    const triggerBtns = document.querySelectorAll('.burger')
    const menu = document.querySelector('.burger-menu')

    triggerBtns.forEach(triggerBtn => {
        triggerBtn.onclick = function() {
            menu.classList.toggle('active')
            triggerBtn.classList.toggle('active')
        }
    })
}

burgerMenu()

const openPopup = () => {
    const triggerBtns = document.querySelectorAll('.popup-btn')
    const overlay = document.querySelector('.overlay')

    triggerBtns.forEach(item => {
        item.onclick = function() {
            overlay.classList.add('active')
        }
    })

    overlay.onclick = function(e) {
        if (e.target.classList.contains('overlay')) {
            overlay.classList.remove('active')
        }
    }
}

openPopup()

const closePopup = () => {
    const closeBtns = document.querySelectorAll('.close-popup')

    closeBtns.forEach(item => {
        item.onclick = function() {
            const currentPopup = item.closest('.modal-popup')
            currentPopup.classList.remove('active')
        }
    })
}

closePopup()

try {
    const reviewsSwiper = new Swiper('.reviews-swiper', {
        spaceBetween: 10,
        loop: true,
        slidesPerView: 4,
        speed: 600,
        navigation: {
            nextEl: '.reviews-swiper-right',
            prevEl: '.reviews-swiper-left',
        },
    })
} catch {}

$(function() {
    try {
        let input = $('.data-value')
        input.next().val(input.val())
        $('.data-input').daterangepicker({
            singleDatePicker: true,
            locale: {
                applyLabel: 'Применить',
                cancelLabel: 'Отмена',
                fromLabel: 'От',
                toLabel: 'До',
                daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            }
        }, function(start, end, label) {
            input.val(start.format('DD.MM.YYYY'));
            input.next().val(input.val())
        }
        );
    } catch {}
})


const selectOptions = () => {
    const openTrigger = document.querySelector('.option-input')
    const menuList = document.querySelector('.options__list')
    const menuListItems = document.querySelectorAll('.options__list-item')
    const optionsField = document.querySelector('.options-field')

    let hideInput = optionsField.nextElementSibling
    hideInput.value = optionsField.value

    openTrigger.onclick = function() {
        menuList.classList.add('active')
    }

    window.onclick = function(e) {
        if (menuList.classList.contains('active')) {
            if (!e.target.closest('.option-input')) {
                menuList.classList.remove('active')
            }
        }
    }

    menuListItems.forEach(item => {
        item.onclick = function() {
            item.classList.toggle('selected')
            
            let selectedItems = document.querySelectorAll('.options__list-item.selected')

            if (selectedItems.length === 0) {
                optionsField.value = 'Без дополнительных опций'
            } else {
                const itemsArr = []
                selectedItems.forEach(item => {
                    itemsArr.push(item.textContent)
                })
                optionsField.value = itemsArr.join()
                hideInput.value = optionsField.value
            }
        }
    })
}

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

        const changeHideInput = () => {
            let hideInput = amountInput.nextElementSibling
            hideInput.value = amountInput.value
        }

        changeHideInput()

        minusBtn.addEventListener('click', () => {
            if (amountInput.value > 0) {
                amountInput.value --
                changeHideInput()
            }
        })

        plusBtn.addEventListener('click', () => {
            if (amountInput.value < 20) {
                amountInput.value ++
                changeHideInput()
            }
        })
    }

    reverseAddress()
    changeMoversAmount()
}

try {
    calc()
    selectOptions()
} catch(e) {console.log(e);}