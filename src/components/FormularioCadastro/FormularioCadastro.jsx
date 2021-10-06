import React, { Component } from "react"
import "./estilo.css"

 class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo="";
        this.texto="";
        this.categoria="Sem Categoria";
        this.state={categorias:[]}
        this._novasCategorias = this._novasCategorias.bind(this);
    }
     //isncreve  os observadores quando o componente for montado
    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    //desisncreve todos os observadores quando o componente for desmontado
    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }
    //método para mudança de categoria no card
    _handelMudancaCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
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
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render(){
        return(
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <select 
                    onChange={this._handelMudancaCategoria.bind(this)}
                    className="form-cadastro_input"
                >
                <option>Sem Categoria</option>
                    {this.state.categorias.map((categoria, index) =>{
                        return(<option key={index}>{categoria}</option>)
                    })}
                </select>
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