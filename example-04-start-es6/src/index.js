import {soma} from './funcoes';



const minhaPromise = () => new Promise((resolve, reject) =>{
    setTimeout(() => { 
        resolve("OK")
    }, 1200);

})

minhaPromise().then(response => {
    console.log(response)
})

async function inital(){
   console.log( await minhaPromise())
   console.log( await minhaPromise())
   console.log( await minhaPromise())

}

inital()


console.log(soma())
class Todo {
    constructor(){
        this.todos = [];
    }

    addTodo(tarefa){
        this.todos.push(tarefa)
        console.log(this.todos)
    }
}

class Pessoa extends Todo{
    constructor(nome){
        super();
        this.nome = nome;
    }

    mostrarLista(){
        console.log(this.todos)
    }
}

const pessoaLegal = new Pessoa("Carlos");

let inputTarefa = document.querySelector("#tarefa");
let inputValue;

inputTarefa.addEventListener("change", function(){
    inputValue = inputTarefa.value;
})

document.querySelector(".newTodo").onclick = function() {
    pessoaLegal.addTodo(inputValue)
    clearInput();
}

const clearInput = () =>{
    inputTarefa.value = "sua maaasasase";
}

console.log("1")