// JSON (JAVASCRIPT OBJECT NOTATION)

//OBJETOS JS

const t1 ={
    titulo: "Tarefa 01",
    desc: "Descrição da tarefa",
    imprimir: function (){
        return `${this.titulo} - ${this.desc}`
    }

};
//objeto só com dados
const t2 = {
    titulo:"Tarefa 02",
    desc: "Descrição da tarefa 3"
}

//transformei em json para api
const x =JSON.stringify(t2);
//fazer o contrário, transforma em objeto novamente
const y = JSON.parse(x);