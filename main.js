alert("Hello, World!"); //alert Displays a simple message in a dialog box.

let Name = prompt("What's your name?"); //prompt Asks the user for input and returns it.
alert("Hello, " + name);

//if statements
if (condition) { //basic Executes code based on a condition.
    // code to execute if condition is true
}

if (age >= 18) { //if else Executes code if the condition is true or false.
    alert("You are an adult.");
} else {
    alert("You are a minor.");
}


if (age > 18) { //else if Checks multiple conditions.
    alert("Adult");
} else if (age === 18) {
    alert("Just turned adult");
} else {
    alert("Minor");
}


//For and while loops
for (let i = 0; i < 5; i++) { //For Loops through a block of code a set number of times.
    console.log(i);  // Output: 0, 1, 2, 3, 4
}

let i = 0; //While
while (i < 5) {
    console.log(i);  // Output: 0, 1, 2, 3, 4
    i++;
}


//Objects
let person = { //Creating object
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello " + this.name);
    }
};
person.greet();  // Output: Hello John

//Accesing object priorities 
console.log(person.name);  // Output: John
console.log(person["age"]);  // Output: 30


//Arrays
let fruits = ["Apple", "Banana", "Cherry"];  //Creating an array

console.log(fruits[0]);  // Output: Apple //Accessing array elements:

//Array methods 
//push  adds an item to the end of an array.
fruits.push("Orange");
//pop Removes the last item from an array.
fruits.pop();
//forEach Executes a function for each element in an array.
fruits.forEach(function(item) {
    console.log(item);
});

//QuerySelector and QuerySelectorAll
let element = document.querySelector(".myClass"); //QuerySelector: Selects the first element that matches a CSS selector.

let elements = document.querySelectorAll(".myClass"); // QuerySelectorAll: Selects all elements that match a CSS selector.
elements.forEach(function(el) {
    console.log(el);
});


//EventListener and InnerHTML (DOM)
let button = document.querySelector("button"); //Add EventListener: Adds an event listener to an element.
button.addEventListener("click", function() {
    alert("Button clicked!");
});

let div = document.querySelector("div"); //Changing InnerHTML: Modifies the content of an element.
div.innerHTML = "New content!";

//Localstorage and JSON 
localStorage.setItem("name", "John"); //Storing data in localStorage

let name = localStorage.getItem("name"); //Retrieving data from localStorage:
console.log(name);  // Output: John

let user = { name: "John", age: 30 }; //Storing and retrieving objects using JSON:
localStorage.setItem("user", JSON.stringify(user));

let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);  // Output: John


//Classlist
let Element = document.querySelector(".myElement"); //Adding a class
element.classList.add("newClass");

element.classList.remove("oldClass"); //Removing a class

element.classList.toggle("active"); //Toggling a class