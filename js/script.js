/* Button Functions */
function alertFunction() {
    alert("THIS IS AN ALERT WEE WOO WEE WOO !!!!!!!");
}
function confirmFunction() {
    confirm("yes or no");
}
function outputFunction() {
    alert(document.getElementById('textInput').value);
}

/* Adds a color input to change the color of text to each paragraph */
const paragraph = document.getElementsByTagName("p");
const numberOfPara = paragraph.length;
for (let i = 0; i < numberOfPara; i++) {

    const input = document.createElement("input");
    input.type = "color";
    input.value = "#d1d7e0";
    input.autocomplete = "off";
    input.id = "colorPicker" + i.toString();

    paragraph[i].insertAdjacentElement("beforebegin", input);
    const text = document.getElementById("text" + i.toString());
    input.addEventListener("input", function () {
        text.style.color = this.value;
    })
}

/* Add and remove rows from the table */
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");
const table = document.querySelector("table");
function addRow(e) {
    e.preventDefault();

    tbody.innerHTML += `
        <tr>
            <td><input type="text"</td>
            <td><input type="text"></td>
            <td> <button class="trash">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9198a1" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
                </button>
            </td>
        </tr>
    `;
}

function deleteRow(e) {
    if (!e.target.classList.contains("trash")) {
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
}

form.addEventListener("submit", addRow);
table.addEventListener("click", deleteRow);