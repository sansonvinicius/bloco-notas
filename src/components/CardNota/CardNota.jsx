import React, { Component } from "react"
import "./estilo.css"
// o className identifica as classes atribuidas no css
class CardNota  extends Component {
    render() { 
        return(
            <section className="card-nota">
                <header className="card-nota-cabecalho">
                    <h3 className="card-nota-titulo">Título</h3>
                </header>
                <p className="card-nota-texto">Escreva sua nota</p>
            </section>
        );
    }
}
 
export default CardNota;