const ratesDropdown = () => {
    const trigger = document.querySelector('.rates-trigger')
    const menu = document.querySelector('.rates__tabs')
    const menuItems = document.querySelectorAll('li.rates__tab')

    trigger.onclick = function() {
        menu.classList.toggle('active')
    }

    menuItems.forEach(item => {
        item.onclick = function() {
            let textItems = item.querySelectorAll('p')
            let triggerTextItems = trigger.querySelectorAll('p')

            textItems.forEach(item => {
                let index = Array.from(textItems).indexOf(item)
                triggerTextItems[index].textContent = item.textContent
            })
        }
    })
}

ratesDropdown()