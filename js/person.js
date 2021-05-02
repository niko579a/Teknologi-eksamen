class Person{
    constructor(id){
        this.genderInput= `Køn:<br><select onChange="handelInput(this, ${id - 1})" name="gender" id="${id}-gender"><option disabled selected>Vælg</option><option value="male">Mand</option><option value="female">Kvinde</option></select>`,
        this.ageInput= `Alder:<br><input onInput="handelInput(this, ${id - 1})" name="age" id="${id}-age" type="number">`,
        this.weightInput= `Vægt:<br><input onInput="handelInput(this, ${id - 1})" name="weight" id="${id}-weight" type="number">`,
        this.heightInput= `Højde:<br><input onInput="handelInput(this, ${id - 1})" name="height" id="${id}-height" type="number">`,
        this.caloriesInput= `Antal kalorier på en dag:<br><input onInput="handelInput(this, ${id - 1})" name="calories" id="${id}-calories" type="number">`,
        this.gender = '',
        this.age = 0,
        this.weight = 0,
        this.height = 0,
        this.calories = 0
    }
}

