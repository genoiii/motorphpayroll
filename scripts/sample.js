const buttonNext = document.getElementById('button-next')
const buttonPrevious = document.getElementById('button-previous')
const buttonCancel = document.getElementById('cancel-button')
const buttonSaveAsDraft = document.getElementById('save-as-draft-button')
const orignalNextButtonText = returnButtonText(buttonNext)
const orignalPreviousButtonText = returnButtonText(buttonPrevious)

function isAnyEmployeeSelected() {
    const checkboxes = document.querySelectorAll(".run-payroll .table input[type='checkbox']");
    return Array.from(checkboxes).some(checkbox => checkbox.checked);
}

buttonNext.addEventListener('click', () => {
    if (!isAnyEmployeeSelected()) {
        alert("Please select at least one employee.");
        return;
    }
    
    const currentContent = document.querySelector('.run-payroll .active')
    const nextContent = currentContent.nextElementSibling
    if(currentContent.nextElementSibling === null){
        window.location.href = 'payroll.html';
    }

    if(currentContent.id === "content-3"){
        changeButtonText(buttonNext, 'Submit Payroll')
    }

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

    removeStageHighlight(previousSibling)
    addStageHighlight(nextSibling)
    hideElement(currentStageDescription)
    displayElement(nextStageDescription)    

    hideElement(currentContent)
    displayElement(nextContent)    

    if(nextContent.nextElementSibling === null){
        // hideElement(buttonNext)
        changeButtonText(buttonNext, 'Finish Payroll')
        changeButtonText(buttonPrevious, 'Rerun Payroll')
        hideElement(buttonCancel)
        hideElement(buttonSaveAsDraft)
        changeElementStyleJustifyContent(document.querySelector('.run-payroll-page .nav'), 'center')
    }

    if(nextContent.previousElementSibling !== null){
        displayElement(buttonPrevious)
        
    }
})

buttonPrevious.addEventListener('click', () => {
    const currentContent = document.querySelector('.run-payroll .active')
    const previousContent = currentContent.previousElementSibling

    

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

    removeStageHighlight(previousSibling)
    addStageHighlight(previousPreviousSibling)
    hideElement(currentStageDescription)
    displayElement(previousStageDescription)    

    hideElement(currentContent)
    displayElement(previousContent)

    if(previousContent.previousElementSibling === null){
        hideElement(buttonPrevious)
    }
    if(previousContent.nextElementSibling !== null){
        displayElement(buttonNext)
        changeButtonText(buttonPrevious, orignalPreviousButtonText)
        changeButtonText(buttonNext, orignalNextButtonText)        
        displayElement(buttonCancel)
        displayElement(buttonSaveAsDraft)
        changeElementStyleJustifyContent(document.querySelector('.run-payroll-page .nav'), 'space-between')
    }

    if(currentContent.id === "content-5"){
        changeButtonText(buttonNext, 'Submit Payroll')
    }
})

function changeElementStyleJustifyContent(element, style){
    element.style.justifyContent = style
}

function hideElement(element){
    element.classList.remove('active')
}

function displayElement(element){
    element.classList.add('active')
}

function changeButtonText(element, text){
    element.innerHTML = text
}

function returnButtonText(element){
    return element.innerHTML
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

buttonCancel.addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

document.querySelector('.keep-editing').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

document.querySelector('.discard-changes').addEventListener("click", function() {
	// document.querySelector('.bg-modal').style.display = "none";
    window.location.href = 'payroll.html';
});

const checkboxes = document.querySelectorAll(".run-payroll .table input[type = 'checkbox']");
function checkAll(myCheckbox){
    if(myCheckbox.checked == true){
        checkboxes.forEach(function(checkbox){
            checkbox.checked = true;
        });
    }
    else{
        checkboxes.forEach(function(checkbox){
            checkbox.checked = false;
        });
    }
}

