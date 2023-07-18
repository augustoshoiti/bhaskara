let confirmButton = document.querySelector("#confirm");
confirmButton.disabled = true;

document.querySelector("form").addEventListener("input", function () {
    confirmButton.disabled = !checkInput();
});

//Verificando se todos os campos estão preenchidos
function checkInput() {
    let filled = true;
    let inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            filled = false;
            break;
        }
    }
    return filled;
}

function escreva(string, value) {
    return `<div class="resp-content"><span>${string} = </span><span> ${value} </span></div>`
}

//Executando os cálculos
function calcular() {
    const tag = document.querySelector(".resp");
    if (tag.innerHTML === "") {
        let a, b, c, delta, x1, x2, xv, yv;

        a = Number(document.bhask.a.value);
        b = Number(document.bhask.b.value);
        c = Number(document.bhask.c.value);

        delta = b ** 2 - 4 * a * c;

        if (isNaN(delta) || delta < 0) {
            alert("\u{1F913} Os valores inseridos são inválidos, tente outros.");
        } else {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            xv = -b / (2 * a);
            yv = -delta / (4 * a);

            tag.innerHTML +=
                escreva('Delta', delta) +
                ((x1 === x2)? escreva('x', x1) : escreva('x1', x1) + escreva('x2', x2)) +
                escreva('xv', xv) +
                escreva('yv', yv);
        }   
    }
}

//Zerando o elemento .resp e desabilitando o botão #confirm
function refazer() {
    const tag = document.querySelector(".resp");
    tag.innerHTML = "";
    confirmButton.disabled = true;
}