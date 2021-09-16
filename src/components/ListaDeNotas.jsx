import React, { Component } from "react"
import CardNota from "./CardNota"

class ListaDeNotas extends Component {

    //Precisa ter o método render para renderizar a página
    //Para inserir js precisa colocar entre {}
    render() {
        return (
            <ul>
                {/* Mapeia um array para inserir as categorias das notas */}
                {Array.of("Trabalho","Trabalho","Estudos").map((categoria) => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <CardNota/>
                        </li>
                    );
                } )}
            </ul>
        );
    }
}
export default ListaDeNotas;