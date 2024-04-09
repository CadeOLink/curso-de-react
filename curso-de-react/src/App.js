import logo from './logo.svg';
import './App.css';
import HelloWord from './Componentes/HelloWord';
import SayMyName from './Componentes/SayMyName';
import Pessoa from './Componentes/Pessoa';
import Frases from './Componentes/Frases';
import List from './Componentes/List'
import Evento from './Componentes/Evento';
import Form from './Componentes/Form';
import Condicional from './Componentes/Condicional';

function App() {
  // const name = `Everton`
  // const url = `https://www.shopify.com/stock-photos/photos/cute-curious-cat?c=cat`
  // function sum (a, b){
  //   return a + b
  // }
  return (
    <div className="App" /* NUNCA UTILIZE APENAS CLASS, O JSX COMPREENDE COM CLASSE NA LINGUAGEM DELE, LOGO USE CLASSNAME */>
      {/* <HelloWord/> */}
      {/* <Frases/>
      <Frases/>
      <SayMyName nome="Everton"/>
      <SayMyName nome="Evelyn"/>
      <Pessoa 
        nome="Everton"
        idade="21"
        profissao="Dev"
        foto="https://pbs.twimg.com/media/GIi1mdSWEAAa8jF?format=png&name=360x360"
      />
      <List/> */}
      {/* <h1>Testando evento de click</h1>
      <Evento numero={1}/>
      <Form/> */}
      <h1>Renderização condicional</h1>
      <Condicional/>
    </div>
  );
}

export default App;
