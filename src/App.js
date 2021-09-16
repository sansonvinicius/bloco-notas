import React from 'react';
import ListaDeNotas from './components/ListaDeNotas'

function App() {
  return (
    //Todo o jsx deve estar dentro de uma tag pai
    <section>
      <form>
        <input type="text" placeholder="Titulo"/>
        <textarea placeholder="Escreva sua nota..."/>
        <button type="submit">Criar Nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
