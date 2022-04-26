// variables 

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const town = document.getElementById("town");
const program = document.getElementById("program");
const parentName = document.getElementById("parentName");
const allergies = document.getElementById("allergies");

const nameValidator = (e) => {
    e.preventDefault();
    console.log(name.textContent += `${e}`)
}

firstName.addEventListener('keydown', nameValidator);