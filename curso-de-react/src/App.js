import logo from './logo.svg';
import './App.css';
import HelloWord from './Componentes/HelloWord';

function App() {
  const name = `Everton`
  const url = `https://www.shopify.com/stock-photos/photos/cute-curious-cat?c=cat`
  function sum (a, b){
    return a + b
  }
  return (
    <div className="App" /* NUNCA UTILIZE APENAS CLASS, O JSX COMPREENDE COM CLASSE NA LINGUAGEM DELE, LOGO USE CLASSNAME */>
      {/* <h1>Olá mundo</h1>
      <p>Meu nome é {name.toLocaleUpperCase()}</p>
      <p>Soma: {sum(2,2)}</p>
      <img src={url} alt="Imagem" /> */}

      <HelloWord/>
    </div>
  );
}

export default App;
