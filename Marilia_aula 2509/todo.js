const form = document.querySelector("form");
const divTarefas = document.getElementById("tarefas");
const inputTitulo = document.getElementById("titulo");
const textareaDesc = document.getElementById("desc");

//tarefas iniciais
//const tarefas = [{
//    titulo: "Minha tarefa 01",
 //   desc : "Descrição da tarefa 01"
//}, 
//{
//    titulo: "Tarefa 02",
//    desc: "Descrição da tarefa 02"

//}, 
//];

function getTarefas(){
    const tarefasJSON = localStorage.getItem("tarefas");
    try{
        const tarefas = JSON.parse(tarefasJSON);
        return tarefas;
        
    } catch (error) {
        
    }
}

function atualizarLista(){
    divTarefas.innerHTML = "";
    tarefas.forEach(t=> {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p")
        h3.innerHTML = t.titulo;
        p.innerHTML= t.desc;
        div.appendChild(h3);
        div.appendChild(p);
        divTarefas.append(div);

    });
}

//salvar nova tarefa
form.addEventListener("submit",e=>{
    //desliga o formulário
    e.preventDefault();
    const novaTarefa = {
        titulo:inputTitulo.value,
        desc:textareaDesc.value

    };
    //adiciona um elemento/objeto no final do array tarefas
    tarefas.push(novaTarefa);
    localStorage.setItem("")
    atualizarLista();
});

atualizarLista();