const buttonNext = document.getElementById('button-next')
const buttonPrevious = document.getElementById('button-previous')

buttonNext.addEventListener('click', () => {
    const currentHeading = document.querySelector('.stages-heading .active')
    const nextHeading = currentHeading.nextElementSibling

    hideElement(currentHeading)
    displayElement(nextHeading)

    const currentStageDescription = document.querySelector('.aside .active')    
    const previousSibling = currentStageDescription.previousElementSibling
    const nextSibling = currentStageDescription.nextElementSibling
    const nextStageDescription = nextSibling.nextElementSibling

    const previousSiblingSvgID = previousSibling.firstElementChild.id
    addStageSucess(previousSiblingSvgID)
    console.log(previousSiblingSvgID)

    removeStageHighlight(previousSibling)
    addStageHighlight(nextSibling)
    hideElement(currentStageDescription)
    displayElement(nextStageDescription)

    const currentContent = document.querySelector('.run-payroll .active')
    const nextContent = currentContent.nextElementSibling

    hideElement(currentContent)
    displayElement(nextContent)

    if(nextContent.nextElementSibling === null){
        hideElement(buttonNext)
    }
    if(nextContent.previousElementSibling !== null){
        displayElement(buttonPrevious)
    }
})

buttonPrevious.addEventListener('click', () => {
    const currentHeading = document.querySelector('.stages-heading .active')
    const previousHeading = currentHeading.previousElementSibling
    hideElement(currentHeading)
    displayElement(previousHeading)

    const currentStageDescription = document.querySelector('.aside .active')
    const previousSibling = currentStageDescription.previousElementSibling    
    const previousStageDescription = previousSibling.previousElementSibling
    const previousPreviousSibling = previousStageDescription.previousElementSibling

    const previousPreviousSiblingSvgID = previousPreviousSibling.firstElementChild.id
    removeStageSucess(previousPreviousSiblingSvgID)
    console.log(previousPreviousSiblingSvgID)

    removeStageHighlight(previousSibling)
    addStageHighlight(previousPreviousSibling)
    hideElement(currentStageDescription)
    displayElement(previousStageDescription)

    const currentContent = document.querySelector('.run-payroll .active')
    const previousContent = currentContent.previousElementSibling

    hideElement(currentContent)
    displayElement(previousContent)

    if(previousContent.previousElementSibling === null){
        hideElement(buttonPrevious)
    }
    if(previousContent.nextElementSibling !== null){
        displayElement(buttonNext)
    }
})

function hideElement(element){
    element.classList.remove('active')
}

function displayElement(element){
    element.classList.add('active')
}

function addStageHighlight(element){
    element.classList.add('highlight')
}

function removeStageHighlight(element){
    element.classList.remove('highlight')
}

function addStageSucess(id){
    // let successStageIcon = document.getElementById("stage-success-icon").innerHTML
    // let currentStageIcon = document.getElementById(id)
    // currentStageIcon.innerHTML = successStageIcon

}

function removeStageSucess(id){
    // let currentStageIcon = document.getElementById(id)
    // currentStageIcon.innerHTML = document.getElementById().innerHTML
}

