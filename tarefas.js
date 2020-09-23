var adicionar = document.getElementById('adicionar');
var lista = document.getElementById('lista');
var tarefa = document.getElementById('tarefa');
tarefa.onkeypress = function(event) {
    if(EventSource.key == 'Enter') {
        add();
    }
}
adicionar.addEventListener('click',add);

function add() {
    
    var elemento = (document.createElement('li',{}));
    elemento.innerText = tarefa.value;
    elemento.classList.add('parafazer');
    elemento.onclick = function() {
        elemento.classList.remove('parafazer');
        elemento.classList.add('pronto');
    }
    btn = document.createElement('button');
    btn.innerText = 'Excluir';
    btn.onclick = function() {
        lista.removeChild(elemento);
    }
    elemento.appendChild(btn)
    lista.appendChild(elemento);
    tarefa.value = '';
    
}