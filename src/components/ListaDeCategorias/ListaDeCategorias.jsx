import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]}
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
        //spread operator adicionando categoria no array
        this.setState({...this.state, categorias});
    }

    _handleEventoInput(e){
        if (e.key ==="Enter"){
            let valorCategoria = e.target.value;
           this.props.adicionarCategoria(valorCategoria);
        }
    }
    render() { 
        return (
               <section className="lista-categorias">
                    <ul className="lista-categorias_lista">
                        {this.state.categorias.map((categoria, index) => {
                            return(<li key={index} className="lista-categorias_item">{categoria}</li>)
                        })}
                    </ul>
                    <input type="text" 
                    className="lista-categorias_input" 
                    placeholder="Add categoria"
                    //onKeyUp para pegar o valor após apertar a tecla enter
                    onKeyUp ={this._handleEventoInput.bind(this)}/>
                </section> 
                );
    }
}
 
export default ListaDeCategorias ;