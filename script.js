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

let confirmButton = document.querySelector("#confirm");
confirmButton.disabled = true;

document.querySelector("form").addEventListener("input", function() {
    confirmButton.disabled = !checkInput();
});

//Executando os cálculos
function calcular() {
    let a, b, c, delta, x1, x2, xv, yv;

    a = Number(document.bhask.a.value);
    b = Number(document.bhask.b.value);
    c = Number(document.bhask.c.value);

    delta = b ** 2 - 4 * a * c;

    if (isNaN(delta) || delta <= 0) {
        alert("\u{1F913} Os valores inseridos são inválidos, tente outros.");
        // return;
    } else {
        const tag = document.querySelector(".resp");

        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        xv = -b / (2 * a);
        yv = -delta / (4 * a);

        tag.innerHTML = `<div class="resp-content"><span>Delta = </span><span> ${delta} </span></div>`;
        tag.innerHTML += `<div class="resp-content"><span>x1 = </span><span> ${x1} </span></div>`;
        tag.innerHTML += `<div class="resp-content"><span>x2 = </span><span> ${x2} </span></div>`;
        tag.innerHTML += `<div class="resp-content"><span>xv = </span><span> ${xv} </span></div>`;
        tag.innerHTML += `<div class="resp-content"><span>yv = </span><span> ${yv} </span></div>`;
    }
}

//Zerando o elemento .resp e desabilitando o botão #confirm
function refazer() {
    const tag = document.querySelector(".resp");
    tag.innerHTML = "";
    confirmButton.disabled = true;
}