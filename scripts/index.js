const slides = document.querySelectorAll('.happy-client .box')
const sw_left = document.querySelector('.happy-client .sw-left')
const sw_right = document.querySelector('.happy-client .sw-right')

let currInd = 0
let isPressed = false

updatePrev()
updateNext()

sw_left.addEventListener('click', () => {
    if ( isPressed ) return
    if ( currInd === 0 ) {
        // add current class to last box
        slides[slides.length-1].classList.add('current')
        slides[slides.length-1].classList.remove('prev')
        // remove oldd current
        slides[0].classList.remove('current')
        slides[0].classList.add('next')
        // update currInd
        currInd = slides.length-1
        updatePrev()
        handleClicks()
        return
    }
    
    // add current class to bax witch has currInd - 1 index
    slides[currInd-1].classList.add('current')
    slides[currInd-1].classList.remove('prev')
    // remove oldd current
    slides[currInd].classList.remove('current')
    slides[currInd].classList.add('next')
    // update currInd
    currInd--
    updatePrev()
    handleClicks()
})

function updatePrev() {
    if ( currInd === 0 ) {
        slides[slides.length-1].classList.add('prev')
        slides[slides.length-1].classList.remove('next')
        return
    }

    slides[currInd-1].classList.add('prev')
    slides[currInd-1].classList.remove('next')
}

sw_right.addEventListener('click', () => {
    if ( isPressed ) return
    const lastInd = slides.length-1
    if ( currInd === lastInd ) {
        // add current class to first box
        slides[0].classList.add('current')
        slides[0].classList.remove('next')
        // remove old current
        slides[lastInd].classList.remove('current')
        slides[lastInd].classList.add('prev')
        // update currInd
        currInd = 0
        updateNext()
        handleClicks()
        return
    }
    
    // add current class to bax witch has currInd + 1 index
    slides[currInd+1].classList.add('current')
    slides[currInd+1].classList.remove('next')
    // remove old current
    slides[currInd].classList.remove('current')
    slides[currInd].classList.add('prev')
    // update currInd
    currInd++
    updateNext()
    handleClicks()
})

function updatePrev() {
    if ( currInd === 0 ) {
        slides[slides.length-1].classList.add('prev')
        slides[slides.length-1].classList.remove('next')
        return
    }

    slides[currInd-1].classList.add('prev')
    slides[currInd-1].classList.remove('next')
}

function updateNext() {
    if ( currInd === slides.length-1 ) {
        slides[0].classList.add('next')
        slides[0].classList.remove('prev')
        return
    }

    slides[currInd+1].classList.add('next')
    slides[currInd+1].classList.remove('prev')
}

function handleClicks() {
    isPressed = true
    if ( isPressed ) setTimeout(() => isPressed = false, 500)
}