// Control function to run the program
function operationPatchwork() {

    clearTable();

    let firstNum = getFirstNum();
    let secondNum = getSecondNum();

    displayPatchwork(firstNum, secondNum);




}

// Clears the table and resets the inputs
function clearPatchwork(){
    clearTable();
    resetValues();
}

// Get inputs from the user
function getFirstNum() {

    return document.getElementById("firstNum").value;
}

function getSecondNum() {

    return document.getElementById("secondNum").value;
}

// Display on the screen and run logic to check what should be displayed
function displayPatchwork(firstNum, secondNum) {

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

        if (index % 3 == 0 && index % 5 == 0) {
            let y = document.createElement("td");
            y.setAttribute("class", "text-success")
            y.innerHTML = "Patchwork";
            document.getElementById(`myTr${idNum}`).appendChild(y);
        } else if (index % 3 == 0) {
            let y = document.createElement("td");
            y.setAttribute("class", "text-primary")
            y.innerHTML = "Patch";
            document.getElementById(`myTr${idNum}`).appendChild(y);
        } else if (index % 5 == 0) {
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

// Clears the display created by displayPatchwork()
function clearTable(){
    let myNode = document.getElementById("tableReveal")
    while (myNode.firstChild){
        myNode.removeChild(myNode.lastChild);
    }
}

// Sets user inputs back to original values
function resetValues(){
    let firstNum = document.getElementById("firstNum");
    let secondNum = document.getElementById("secondNum");

    firstNum.value = 1;
    secondNum.value = 100;
}

// let x = document.createElement("tr");
// x.setAttribute("id", `myTr${counter}`)
// document.getElementById("tableReveal").appendChild(x);

// let y = document.createElement("td");
// y.innerHTML = `${index}`;
// document.getElementById(`myTr${counter}`).appendChild(y);


// counter++;