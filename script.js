const pSizeText = document.querySelectorAll('.size')
const rangeSliderInput = document.getElementById('grid-size-slider')
const containerDiv = document.getElementById('container')
const changeGridButton = document.getElementById('grid-changer')



containerDiv.style.gridTemplateColumns = `repeat(${Number(rangeSliderInput.value)}, 1fr)`

rangeSliderInput.addEventListener('input', () => {
    for (const p of pSizeText) {
        p.textContent = rangeSliderInput.value
    }
})


function gridCreator(size) {
    for (let i = 0; i < size; i++) {
        for (let i = 0; i < size; i++) {
            const divEl = document.createElement("div")
            divEl.classList.add("grid-element")
            divEl.style.width = `${containerDiv.clientWidth / size}`
            divEl.style.height = `${containerDiv.clientHeight / size}`
            divEl.style.borderRadius = `${(containerDiv.clientHeight / size) / 10}px`
            containerDiv.appendChild(divEl)


        }
    }


}
gridCreator(Number(rangeSliderInput.value))


changeGridButton.addEventListener('click', () => {
    containerDiv.innerHTML = ''
    containerDiv.style.gridTemplateColumns = `repeat(${Number(rangeSliderInput.value)}, 1fr)`
    gridCreator(Number(rangeSliderInput.value))


})



containerDiv.addEventListener('mouseover', (e) => {
    if (e.target.matches('.grid-element')) {
        e.target.classList.add('hovered');
    }
})