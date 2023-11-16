const gallerySwiper = new Swiper('.gallery-swiper', {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 4,
})

const gallerySwiperBig = new Swiper('.gallery-swiper-big', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.gallery-swiper-right',
        prevEl: '.gallery-swiper-left',
    },
})

const openGalleryPopup = () => {
    const triggerBtns = document.querySelectorAll('.gallery-photo')
    const galleryPopup = document.querySelector('.gallery-popup')

    triggerBtns.forEach(item => {
        item.onclick = function() {
            galleryPopup.classList.add('active')
        }
    })
}

openGalleryPopup()