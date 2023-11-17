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

try {
    $(function() {
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
            $('.data-value').val(start.format('DD.MM.YYYY'));
        }
        );
    })


    const selectOptions = () => {
        const openTrigger = document.querySelector('.option-input')
        const menuList = document.querySelector('.options__list')
        const menuListItems = document.querySelectorAll('.options__list-item')
        const optionsField = document.querySelector('.options-field')

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
                }
            }
        })
    }

    selectOptions()
} catch {}