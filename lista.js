
const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelectorAll('.list-tasks');

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
    const novaTarefa = input.value.trim();

    if (novaTarefa !== '') {
        minhaListaDeItens.push({
            tarefa: novaTarefa,
            concluida: false,
        });

        input.value = '';
        mostrarTarefas();
    } else {
        alert('Insira uma tarefa antes de adicionar.');
    }
}


function mostrarTarefas() {
    let novaLi = '';

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi += `
                <li class="task ${item.concluida ? 'done' : ''}" onclick="atualizaModal(${posicao})">
                    <p>${item.tarefa}</p>
                </li>`;
    });

    listaCompleta[4].innerHTML = novaLi;

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens));
}

function fechaModal() {
    const modal = document.querySelector(".modal");
    modal.classList.toggle('hidden');
} 

function atualizaModal(posicao) {
    const modal = document.querySelector(".modal");
    const textoModal = document.querySelector(".modal .content p");
    const input = document.querySelector("#codigo");
    const botaoApagar = document.querySelector(".modal .content .trash");

    input.value = posicao;
    botaoApagar.setAttribute("data-posicao", posicao);

    modal.classList.toggle('hidden');
    textoModal.innerHTML = minhaListaDeItens[posicao].tarefa;
}

function concluirTarefa() {
    const inputModal = document.querySelector("#codigo");
    let posicao = inputModal.value;

    if (posicao !== null) {
        minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;
        mostrarTarefas();
        fechaModal()
    }
}

function apagarItem() {
    const inputModal = document.querySelector("#codigo");
    let posicao = inputModal.value;

    if (posicao !== null) {
        minhaListaDeItens.splice(posicao, 1);
        mostrarTarefas();
        fechaModal();
    }
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista');

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage);
    }

    mostrarTarefas();
}

recarregarTarefas();

button.addEventListener('click', adicionarNovaTarefa);

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarNovaTarefa();
    }
});
