const tabs = (tabSelector, contentSelector) => {
    const triggerBtns = document.querySelectorAll(tabSelector)
    const contentBlocks = document.querySelectorAll(contentSelector)

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


tabs('.services-tab', '.services-content__block')
tabs('.rates__tab', '.rates__content')
