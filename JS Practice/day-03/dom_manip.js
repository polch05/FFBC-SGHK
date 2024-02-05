let headingElement = document.getElementById('heading');
console.log(`Get Element By ID: ${headingElement}`);
console.log('Get Element By ID: ', headingElement);

// Get elements by class name
var textElements = document.getElementsByClassName('text');
console.log('Element by Class Name:', textElements);

// Get elements by tag name
let listItems = document.getElementsByTagName('li');
console.log('Element by Tag/Element Name:', listItems);

/* Older Ways of DOM targeting */
// Get element by ID
let headingElement_Jared = document.getElementById('heading');
console.log('Element by ID:', headingElement_Jared);

// Get elements by class name
let textElements_Jared = document.getElementsByClassName('text');
console.log('Element by Class Name:', textElements_Jared);

// Get elements by tag name
let listItems_Jared = document.getElementsByTagName('li');
console.log('Element by Tag/Element Name:', listItems_Jared);

/* New way/more flexible way */
// querySelector (first occurence)
let container = document.querySelector('#container');
console.log('Query Selector: ', container);

// querySelectorAll (all occurences)
let boxes = document.querySelectorAll('.box');
console.log('Query Selector All: ', boxes);

/*DOM Traversal */
//Parent Node
// Parent Node
let listParent = document.querySelector("#list").parentNode;
console.log("Parent Node:", listParent);

// Children
let containerChildren = container.children;
console.log("Children Nodes:", containerChildren);

/* Modifying the HTML */
//innerHTML
headingElement.innerHTML = "<i>Benvenuit di cambiare la Title</>";

// innerHTML (for html rendering)
//headingElement.innerHTML = "<i>Welcome to Modified Header!</>";

// textContent (for filling up text with no HTML)
let textElement = document.querySelector(".text");
textElement.textContent = "<i>New text</i>"

/* Create HTML elements and add them to the document */
let imageElement = document.createElement('img'); // creating a new image element
imageElement.setAttribute('src', 'https://t4.ftcdn.net/jpg/00/88/53/89/360_F_88538986_5Bi4eJ667pocsO3BIlbN4fHKz8yUFSuA.jpg') // setting attribute
let body = document.body; // targeting the body
body.appendChild(imageElement); // adding the element to the body

/* Modify styles of elements */
let btnElements = document.querySelectorAll('button');
btnElements.forEach(btn => {
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
})

headingElement.style.fontSize = "45px";

/* Remove an element */
let firstLIElement = document.querySelector('li');
firstLIElement.remove();

/* EVENT Listeners */
//Add an event listener to the Button 'Click Me'
//First thing to do is to get the button...
const button = document.getElementById('btn');
const handleButtonClick = (e) => {
    console.log("Buttonn was clicked!");
    console.log(e);
    console.log("Event type: ", e.type);
    console.log("Event target:", e.target);
};

button.addEventListener("click", handleButtonClick);