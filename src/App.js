import React, {Component} from 'react';
import FormularioCadastro from './components/FormularioCadastro/'
import ListaDeNotas from './components/ListaDeNotas/'
import "./assets/App.css"

class App extends Component {

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    this.notas.push(novaNota);
  }

  constructor(){
    super();
    this.notas = [];
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}/>
      </section>
    );
  }

}

export default App;
