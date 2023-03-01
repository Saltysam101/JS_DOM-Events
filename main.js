console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.textContent = `I used the getElementById("node1") method to access this`
    // Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2")[0];
node2.textContent = "I used the getElementByClassName(\"node2\") method to access this"
    // Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3 = document.getElementsByTagName("h3");

for (let element of h3) {
    element.textContent = "I used the getElementByClassName(\"h3\") method to access this"

}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let createdP = document.createElement("p")
createdP.textContent = "This node was created using the createElement() method"
    // TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector("#parent")
parent.appendChild(createdP)
    // TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let anchor = document.createElement("a");
anchor.textContent = "I am a <a> tag"
    // BONUS: Add a link href to the <a>
anchor.href = "https://www.google.com/"
    // TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(anchor, createdP)
    /*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let exercise3Container = document.getElementById("exercise-container3");
let oldChildNode = document.getElementById("N1")

let newChildNode = document.createElement("p")
newChildNode.textContent = "New Child Node"
exercise3Container.replaceChild(newChildNode, oldChildNode)
    // TODO: Remove the "New Child Node"
let removeChild = () => {
    exercise3Container.removeChild(newChildNode)
}

setTimeout(removeChild, 5000)
    /*----------- Exercise #4: LIST ITEMS ----------- */
    // Use the following array of values to generate a list on the DOM

let list = ["apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)"];


// TODO: Create an unordered list element
let container4 = document.getElementById("container");
let ul = document.createElement("ul");
container4.appendChild(ul);
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item
        ul.appendChild(li)
    })
    // TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
    let modal = document.createElement("div")
    let modalCard = document.createElement("div");
    let modalHeader = document.createElement("h2");
    let modalP = document.createElement("p");
    let closeBtn = document.createElement("button");

    modal.id = "modal";
    modalCard.className = "modal-card";
    modalHeader.textContent = "This is a modal header"
    modalP.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
    closeBtn.textContent = "Close"

    closeBtn.addEventListener("click", () => {
        document.body.removeChild(modal)
    })

    modalCard.append(modalHeader, modalP, closeBtn)
    modal.appendChild(modalCard);

    document.body.appendChild(modal);
}

let btn = document.getElementById("btn");

btn.addEventListener("click", show);