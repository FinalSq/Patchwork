// Control function to run the program
function operationPatchworkA() {

    clearTable();

    let firstNum = getFirstNum();
    let secondNum = getSecondNum();


    (Number.isInteger(firstNum) && Number.isInteger(secondNum)) ? displayPatchworkA(firstNum, secondNum) : invalidNumber();

}
function operationPatchworkB() {

    clearTable();

    let firstNum = getFirstNum();
    let secondNum = getSecondNum();


    (Number.isInteger(firstNum) && Number.isInteger(secondNum)) ? displayPatchworkB(firstNum, secondNum) : invalidNumber();

}

// Get inputs from the user
function getFirstNum() {

    let firstNum = parseInt(document.getElementById("firstNum").value);

    return firstNum;
}

function getSecondNum() {

    let secondNum = parseInt(document.getElementById("secondNum").value);

    return secondNum;
}

// Display Version A on the screen and run logic to check what should be displayed
function displayPatchworkA(firstNum, secondNum) {

    let patchwork = document.getElementById("tableReveal");
    let counter = 1;
    let idNum = 0;

    for (let index = firstNum; index <= secondNum; index++) {


        if (counter % 5 == 1) {
            idNum++
            let x = document.createElement("tr");
            x.setAttribute("id", `myTr${idNum}`);
            document.getElementById("tableReveal").appendChild(x);
        }

        if (index % 3 == 0 && index % 5 == 0 && index !== 0) {
            let y = document.createElement("td");
            y.setAttribute("class", "text-success")
            y.innerHTML = "Patchwork";
            document.getElementById(`myTr${idNum}`).appendChild(y);
        } else if (index % 3 == 0 && index !== 0) {
            let y = document.createElement("td");
            y.setAttribute("class", "text-primary")
            y.innerHTML = "Patch";
            document.getElementById(`myTr${idNum}`).appendChild(y);
        } else if (index % 5 == 0 && index !== 0) {
            let y = document.createElement("td");
            y.setAttribute("class", "text-warning")
            y.innerHTML = "work";
            document.getElementById(`myTr${idNum}`).appendChild(y);
        } else {
            let y = document.createElement("td");
            y.innerHTML = index;
            document.getElementById(`myTr${idNum}`).appendChild(y);
        }

        counter++;
    }

}

// Display Version B on the screen and run logic to check what should be displayed
function displayPatchworkB(firstNum, secondNum){

    // Grabs the tablebody element and the template element, then stores them in variables
    let tableBody = document.getElementById("tableReveal");
    let templateRow = document.getElementById("tableTemplate");

    // Clears table
    tableBody.innerHTML = "";

    for (let i = firstNum; i <= secondNum; i += 5) {
    
        // Clones the node 
        let tableRow = document.importNode(templateRow.content, true);
    
        // Selects all "td" elements inside of tableRow and stores it as an array
        let rowCols = tableRow.querySelectorAll("td");
    
        rowCols[0].textContent = (i <= secondNum) ? checkMod(i) : "";
        rowCols[0].classList.add(rowCols[0].textContent);
        rowCols[1].textContent = (i + 1 <= secondNum) ? checkMod(i + 1) : "";
        rowCols[1].classList.add(rowCols[1].textContent);
        rowCols[2].textContent = (i + 2 <= secondNum) ? checkMod(i + 2) : "";
        rowCols[2].classList.add(rowCols[2].textContent);
        rowCols[3].textContent = (i + 3 <= secondNum) ? checkMod(i + 3) : "";
        rowCols[3].classList.add(rowCols[3].textContent);
        rowCols[4].textContent = (i + 4 <= secondNum) ? checkMod(i + 4) : "";
        rowCols[4].classList.add(rowCols[4].textContent);
        
    
        // Adds the content of the cloned node tableRow to the tableBody's element
        tableBody.appendChild(tableRow);
        
    }

}

// Create a function that will change multiples of 3 and 5 into "Patch" and "work".
// Turns multiples of 3 and 5 into "Patchwork"
function checkMod(num){

    if (num % 5 == 0 && num % 3 == 0 && num !== 0){
        return "Patchwork";
    } else if (num % 3 == 0 && num !== 0){
        return "Patch";
    } else if (num % 5 == 0 && num !== 0){
        return "work";
    } else {
        return num;
    }



}



// Clears the display created by displayPatchwork()
function clearTable(){
    
    // Quick easy way of clearing the table
    document.getElementById("tableReveal").innerHTML = "";

    // A way of clearing the content of the table by removing the content using a loop
    // let myNode = document.getElementById("tableReveal")
    // while (myNode.firstChild){
    //     myNode.removeChild(myNode.lastChild);
    // }
}

// Sets user inputs back to original values
function resetValues(){
    let firstNum = document.getElementById("firstNum");
    let secondNum = document.getElementById("secondNum");

    firstNum.value = 1;
    secondNum.value = 100;
}

// Clears the table and resets the inputs
function clearPatchwork(){
    clearTable();
    resetValues();
}

// Error Function, Invalid Number
function invalidNumber(){
    clearPatchwork();
    alert("You must enter a valid number!")
}