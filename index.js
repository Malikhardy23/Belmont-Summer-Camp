// variables 

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const town = document.getElementById("town");
const program = document.getElementById("program");
const parentName = document.getElementById("parentName");
const allergies = document.getElementById("allergies");
const specialNeeds = document.getElementById("specialNeeds");
const submitFormBtn = document.getElementById("submitFormBtn");
const firstNameLabel = document.getElementById("firstNameLabel");
let registeredKidsContainer = document.getElementById("registeredKids");
const page = document.getElementById("page");

const nameValidator = (e) => {
    e.preventDefault();

        // first name validator checks if a name was inserted
    if(firstName.value == '' || firstName.value.length < 1){
        firstName.style.borderColor = "red";
        firstName.placeholder = "Please Enter Valid Name";
        firstNameLabel.style.color = "red";
        firstName.style.fontWeight = "bold";
        console.log('First Name is invalid');
    }

    // last name validator checks if a name was inserted
    if(lastName.value == '' || lastName.value.length < 1){
        lastName.style.borderColor = "red";
        lastName.placeholder = "Please Enter Valid Name";
        lastName.style.fontWeight = "bold";
        console.log('last Name is invalid');
    }
}


// get all input values to push into registered kids container
const inputValues = () => {

    let registeredKidsContainer = '';

    const allValues = {
        
            'first name': firstName.value, 'last name': lastName.value, 'town': town.value, 'program name': program.value, 'parent name': parentName.value, 'allergies': allergies.value, 'special needs': specialNeeds.value
        
    }

    // push all of the input values into the registered kids container

    for(const property in allValues){
       const registeredData = `${property}: ${allValues[property]}`;
       const container = document.createElement('div');
       container.classList.add("active")
       container.textContent = `${registeredData}`; 
       container.style.backgroundColor = "black";
       container.style.color = "white";
       container.style.width = "35%";
       container.style.display = "grid";
       container.style.margin = "0 auto";
       container.style.textAlign = "center"
       container.style.fontWeight = "bold"
       container.style.padding = "25px";
       container.style.border = "2px solid red";
      document.body.appendChild(container)
      console.log(container);
        
    }


   /*  console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(townValue);
    console.log(programValue);
    console.log(parentNameValue);
    console.log(allergiesValue);
    console.log(specialNeedsValue); */
}


submitFormBtn.addEventListener('click', nameValidator);

submitFormBtn.addEventListener('click', inputValues);
