let amountOfPeople = 0;

let allPersoninputs = [];

function getchoosenRecipe() {
    let URL = window.location.href;
    let  slashRemove = URL.split('/');
     let recipe = slashRemove[slashRemove.length -1].split('?')[1];
     return allRecipies[recipe];
}

const choosenRecipe = getchoosenRecipe();

const peopleAmountSelect = document.getElementById('peopleAmount');

const personDetailsDiv = document.getElementById('personDetailsDiv');

const selectpeopleAmount = document.getElementById('selectpeopleAmount');

const calculateFoodBtn = document.getElementById('calculateFood');

const displayResult = document.getElementById('displayResult');

const titleOnPage = document.getElementById('titleOnPage');

const displayResultList = document.getElementById('displayResultList');

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
    calculateFoodBtn.hidden = false;
}

function handelRangeInput(range, index){
    allPersoninputs[index][range.name] = (range.value/100);
    let span = document.getElementById((index + 1) + '-foodPriorty-span');
    span.innerHTML = allPersoninputs[index][range.name];
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
    let totalMealPriority = 0;
    let totalCaloriesPrGramPrIngredients = 0;
    let CaloriesPrGramPrIngredient = 0;
    let caloriesPrPart = 0;
    let finalRecipeRatio = [];
    let totalAmountOfIngredients = 0;
    let gramPrIngredientFinal = 0;
    let totalGrams = 0;
    let finalResult = [];
    let finalTotalGrams = [];
    
    selectpeopleAmount.hidden = true;
    personDetailsDiv.hidden = true;

    calculateFoodBtn.hidden = true;
    
    allPersoninputs.forEach(person => {
        //En persons daglige kalorieindtag
        if (person.gender == 'male') {
            person.calorieAmount = 9.99 * person.weight + 6.25 * person.height - 4.92 * person.age + 5;
        } else {
            person.calorieAmount = 9.99 * person.weight + 6.25 * person.height - 4.92 * person.age - 161;
        }
        //Hvor mange kalorier personen skal spise dette måltid
        person.mealPriority = person.calorieAmount * person.foodPriorty;
    });

    //Finder den totale mængde af hver person prioritet for et måltid
    allPersoninputs.forEach(person => {
        totalMealPriority += person.mealPriority;
    });

    //Vi lægger alle værdierne i arrayen sammen
    choosenRecipe['caloriesPrGramPrIngredients'].forEach(value => {
        totalCaloriesPrGramPrIngredients += value; 
    });

    choosenRecipe['amountOfIngredients'].forEach(value => {
        totalAmountOfIngredients += value; 
    });

    //dividerer antallet af ingredienser kalorier med den samlet værdi af gram pr kalorie
    CaloriesPrGramPrIngredient = totalCaloriesPrGramPrIngredients / totalAmountOfIngredients;

    totalGrams = totalMealPriority / CaloriesPrGramPrIngredient;

    choosenRecipe['amountOfIngredients'].forEach(value => {
        let result = (totalGrams / 100) * value;
        finalTotalGrams.push(result);
    });

    displayCalFood(finalTotalGrams);
}

function displayCalFood(result) {
    displayResult.hidden = false;

    for (let i = 0; i < result.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${choosenRecipe.ingredients[i]}: ${Math.round(result[i])} g`;
        displayResultList.appendChild(li);
    }
}