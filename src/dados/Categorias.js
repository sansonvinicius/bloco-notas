export default class Categorias {
    constructor(){
        this.categorias = [];
        //para utilizar com o observable
        this._inscritos = [];
    
    }

    //inscreve quem observará as mudanças
    inscrever(func){
        this._inscritos.push(func);
    }

    //desinscrever os observadores das categorias
    desinscrever(func){
        //verifica todos os que não estão nessa função
        this._inscritos = this._inscritos.filter(f => f!== func);
    }
    //notifica os inscritos das mudanças
    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}