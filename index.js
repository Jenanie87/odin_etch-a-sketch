let container = document.querySelector(".container");
let mainPart = document.querySelector(".main-part");

let eraseButton = document.querySelector(".btnErase");

function numbersSquare() {
    n = slider.value;
    for (let j = 0; j < n; j++) {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("squareColumn");
        container.appendChild(columnDiv);
        for (let i = 0; i < n; i++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("squareRow");
            columnDiv.appendChild(rowDiv);   
            
            // Change the color 

            rowDiv.addEventListener("mouseover", () => {
                rowDiv.style.background = "grey";
                setTimeout(() => {
                    rowDiv.style.backgroundColor = "#c0c0c0";    
                }, 700);
                setTimeout(() => {
                    rowDiv.style.backgroundColor = "#cccccc";    
                }, 1000);
                setTimeout(() => {
                    rowDiv.style.backgroundColor = "#e1e1e1";    
                }, 1500);
            });

            // Change the color back to white

            eraseButton.addEventListener("click", () => {
                rowDiv.style.backgroundColor = "white";
            })
        }
    }
};

// Add colors to the square grid

function numbersSquareColor() {
    n = slider.value;
    for (let j = 0; j < n; j++) {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("squareColumn");
        container.appendChild(columnDiv);
        for (let i = 0; i < n; i++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("squareRow");
            columnDiv.appendChild(rowDiv);   
            
            // Change the color 

            rowDiv.addEventListener("mouseover", () => {
                rowDiv.style.backgroundColor = 'rgb(' + [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)].join(',') + ')';
            });

            // Change the color back to white

            eraseButton.addEventListener("click", () => {
                rowDiv.style.backgroundColor = "white";
            })
        }
    }
};

let slider = document.getElementById("myRange");
let output = document.getElementById("value");

let button = document.querySelector(".btn");
let buttonColor = document.querySelector(".btnColor");

button.addEventListener("click", () => {
    container.innerHTML = "";
    numbersSquare();
});

buttonColor.addEventListener("click", () => {
    container.innerHTML = "";
    numbersSquareColor();
});

output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function () {
    output.innerHTML = this.value + " x " + this.value;
}



