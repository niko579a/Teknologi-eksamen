let amountOfPeople = 0;

let allPersoninputs = [];

function getChoosenFood() {
    let URL = window.location.href;
    let  slashRemove = URL.split('/');
    return slashRemove[slashRemove.length -1].split('?')[1];
}

const choosenFood = getChoosenFood();

const peopleAmountSelect = document.getElementById('peopleAmount');

const personDetailsDiv = document.getElementById('personDetailsDiv');

for (let i = 1; i <= 100; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = i;
    peopleAmountSelect.appendChild(option);
}

function peopleAmountSelected() {
    amountOfPeople = peopleAmountSelect.value;
    allPersoninputs = [];
    personDetailsDiv.innerHTML = '';
    createInputs();
    personDetailsDiv.hidden = false;
}

function createInputs(){
    for (let i = 1; i <= amountOfPeople; i++) {
        const personInput = new Person(i);
        let aPersonsDeatilDiv = document.createElement('div');
        aPersonsDeatilDiv.setAttribute('class', 'aPersonsDeatilDiv');
        aPersonsDeatilDiv.innerHTML += `<h3> Person ${i} </h3>`; 
        for (const key in personInput) {
            if (key.includes('Input') === true) {
                aPersonsDeatilDiv.innerHTML += personInput[key] + '<br> <br>';
            }
        }
        personDetailsDiv.appendChild(aPersonsDeatilDiv);
        allPersoninputs.push(personInput);
    }
}

function handelInput(input, index) {
    allPersoninputs[index][input.name] = input.value;
}

function calFood() {
    console.log(allPersoninputs);
}


