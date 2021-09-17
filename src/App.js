import React, {Component} from 'react';
import FormularioCadastro from './components/FormularioCadastro/'
import ListaDeNotas from './components/ListaDeNotas/'
import "./assets/App.css"

class App extends Component {

  criarNota(titulo, texto){
    console.log(`uma nova nota foi criada` + titulo + " " + texto);
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas/>
      </section>
    );
  }

}

export default App;
