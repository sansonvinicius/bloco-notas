import React, { Component } from "react"
import CardNota from "./CardNota"

class ListaDeNotas extends Component {

    //Precisa ter o método render para renderizar a página
    render() {
        return (
            <ul>
                <li>
                    <CardNota/>
                </li>
                <li>
                     <CardNota/>
                </li>
            </ul>
        );
    }

}
export default ListaDeNotas;