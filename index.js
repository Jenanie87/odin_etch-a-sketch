let container = document.querySelector(".container");

function numbersSquare() {
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            const columnDiv = document.createElement("div");
            container.appendChild(columnDiv);
            columnDiv.classList.add("squareColumn");
        }
        const rowDiv = document.createElement("div");
        columnDiv.appendChild(rowDiv);
        columnDiv.classList.add("squareRow");
/*         let newLine = document.createElement("br");
        container.appendChild(newLine);
        newLine.classList.add("br"); */

    }
};


numbersSquare();

/* let test = document.querySelector("#test");
let test1 = document.querySelector(".t1");
let test2 = document.querySelector(".t2"); */

/* let moreSpace = document.createElement("BR");
test1.appendChild(moreSpace); */