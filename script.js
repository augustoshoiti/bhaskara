const confirmButton = document.querySelector("#confirm");
const inputs = document.getElementsByTagName("input");
const tag = document.querySelector(".resp");
confirmButton.disabled = true;

//Verificando se todos os campos estão preenchidos
document.querySelector("form").addEventListener("input", () => {
    let filled = false;
    for (const input of inputs) {
        if (input.value === "") {
                filled = true;
                break;
            }
    }
    confirmButton.disabled = filled;
});

function escreva(string, value) {
    return `<div class="resp-content"><span>${string} = </span><span> ${value} </span></div>`
}

//Executando os cálculos
function calcular() {
    if (tag.innerHTML === "") {
        let a, b, c, delta, x1, x2, xv, yv;

        a = Number(document.bhask.a.value);
        b = Number(document.bhask.b.value);
        c = Number(document.bhask.c.value);

        if (a != 0) {
            delta = b ** 2 - 4 * a * c;

            if (isNaN(delta) || delta < 0) {
                alert("Os valores inseridos são inválidos ou a equação não possui raízes reais.");
            } else {
                x1 = (-b + Math.sqrt(delta)) / (2 * a);
                x2 = (-b - Math.sqrt(delta)) / (2 * a);
                xv = -b / (2 * a);
                yv = -delta / (4 * a);
    
                tag.innerHTML +=
                    escreva('Delta', delta) +
                    ((x1 === x2)? escreva('x1 = x2', x1) : escreva('x1', x1) + escreva('x2', x2)) +
                    escreva('xv', xv) +
                    escreva('yv', yv);
            }
        } else {
            alert("'A' não pode ser 0.");
        }
    } else {
        alert("Para realizar outro cálculo clique em 'Refazer', essa ação fará com que a resposta atual seja apagada.");
    }
}

//Zerando o elemento .resp e desabilitando o botão #confirm
function refazer() {
    tag.innerHTML = "";
    confirmButton.disabled = true;
}