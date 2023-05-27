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

const tag = document.querySelector(".resp");

//Executando os cálculos
function calcular() {
    let a, b, c, delta, x1, x2, xv, yv, txt;

    a = document.bhask.a.value;
    b = document.bhask.b.value;
    c = document.bhask.c.value;

    delta = Math.pow(b, 2) - 4 * a * c;

    if (delta <= 0) {
        window.alert("Delta é invalido, tente outros valores");
        return;
    } else {
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
    tag.innerHTML = "";
    confirmButton.disabled = true;
}