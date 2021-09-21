import React, { Component } from "react"
import CardNota from "../CardNota"
import "./estilo.css"

class ListaDeNotas extends Component {

    //Precisa ter o método render para renderizar a página
    //Para inserir js precisa colocar entre {}
    render() {
        return (
            <ul className="lista-notas">
                {/* Mapeia um array para inserir as categorias das notas */}
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota/>
                        </li>
                    );
                } )}
            </ul>
        );
    }
}
export default ListaDeNotas;