import React, { Component } from "react"
import "./estilo.css"

 class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo="";
        this.texto="";
    }
    //método para mudança de título do card
    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    //método para mudança de texto do card
    _handelMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    //método para criar nova nota com o título e texto inseridos
    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render(){
        return(
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    className="form-cadastro_input" 
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..." 
                    className="form-cadastro_input"
                    onChange={this._handelMudancaTexto.bind(this)}
                />
                <button className="form_cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
          </form>
        );
    }
   

}
export default FormularioCadastro;