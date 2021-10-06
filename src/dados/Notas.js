export default class ArrayDeNotas {
    constructor(){
        this.notas = [];
        //para utilizar com o observable
        this._inscritos = [];
    }

    adicionarNota(titulo, texto, categoria){
        //adiciona notas no array
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        //notificando sempre que uma nota é criada para atualizar 
        this.notificar();

    }

    apagarNota(indice){
        //a partir do indice, deleta uma nota
        this.notas.splice(indice, 1);
        //notificando sempre que uma nota é apagada para atualizar 
        this.notificar();
    }
    //inscreve quem observará as mudanças
    inscrever(func){
        this._inscritos.push(func);
    }
    //desinscrever os observadores das categorias
    desinscrever(func){
        //verifica todos os que não tem essa função
        this._inscritos = this._inscritos.filter(f => f!== func);
    }
    //notifica os inscritos das mudanças
    notificar(){
        this._inscritos.forEach(func => {
            func(this.notas);
        });
    }
}

class Nota {
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;

    }
}