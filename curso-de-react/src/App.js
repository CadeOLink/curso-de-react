import logo from './logo.svg';
import './App.css';
import HelloWord from './Componentes/HelloWord';
import SayMyName from './Componentes/SayMyName';
import Pessoa from './Componentes/Pessoa';
import Frases from './Componentes/Frases';
import List from './Componentes/List'

function App() {
  const name = `Everton`
  const url = `https://www.shopify.com/stock-photos/photos/cute-curious-cat?c=cat`
  function sum (a, b){
    return a + b
  }
  return (
    <div className="App" /* NUNCA UTILIZE APENAS CLASS, O JSX COMPREENDE COM CLASSE NA LINGUAGEM DELE, LOGO USE CLASSNAME */>
      {/* <HelloWord/> */}
      <Frases/>
      <Frases/>
      <SayMyName nome="Everton"/>
      <SayMyName nome="Evelyn"/>
      <Pessoa 
        nome="Everton"
        idade="21"
        profissao="Dev"
        foto="https://pbs.twimg.com/media/GIi1mdSWEAAa8jF?format=png&name=360x360"
      />
      <List/>
    </div>
  );
}

export default App;
