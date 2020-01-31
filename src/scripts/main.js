const allCars = [{
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
/* allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
}) */

/*
    Just get a reference to the first object since
    they all have the same properties
*/
/* const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
    outputElement.innerHTML += `<div>${key}</div>`
} */

// Iterate the array of cars. Individual objects stored in `car`.
/* outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
    }
}) */

outputElement.innerHTML += "<h1>Car List</h1>"

allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"

    for (const entry of Object.entries(car)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})
// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.



const doctorBill = {
    officeName: "Hospital Park",
    streetAddress: "123 Street St.",
    doctorName: "Holloway, Chris",
    patientName: "Johnny Appleseed",
    visitDate: "09/30/90",
    amountBilled: "123.55",
    dueDate: "09/31/99"
}

const dateVisited = doctorBill["visitDate"];
const owed = doctorBill["amountBilled"];
const patient = doctorBill["patientName"];
console.log(dateVisited, owed, patient);



// Lightning Exercise 2: Copy the code below and paste it above your object.


// Use square bracket notation to output the value of those three properties to the console in Chrome.

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
console.log(Object.values(doctorBill));

// Lightning Exercise 4: Output all of the key names from your doctor's office bill to the console in Chrome.
/* for (const keys of Object.keys(doctorBill)){
    console.log(keys);
} */

// Lightning Exercise 5: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
let drKeysHTML = "";
for (const keys of Object.keys(doctorBill)) {
    drKeysHTML += `
    <span>${keys}</span>
    `
}

document.getElementById("dr").innerHTML = drKeysHTML;

// Lightning Exercise 6: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favDinner = {
    name: "gumbo",
    size: "8oz",
    weight:"1lb",
    ethnicity: "creole",
    vegetarian: false

}
// Lightning Exercise 7: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.
let dinnerHTML = "";
for (const entry of Object.entries(favDinner)){
    dinnerHTML += `
        <div>
            ${entry[0]}:${entry[1]}
        </div>
    `

}

document.querySelector(".food").innerHTML = dinnerHTML;
