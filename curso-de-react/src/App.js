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
import OutraLista from './Componentes/OutraLista';
import SeuNome from './Componentes/SeuNome';
import { useState } from 'react';
import Saudacao from './Componentes/Saudacao';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';

function App() {
  // const name = `Everton`
  // const url = `https://www.shopify.com/stock-photos/photos/cute-curious-cat?c=cat`
  // function sum (a, b){
  //   return a + b
  // }

  // const meusItens = ['React', 'Vue', 'Angular'];

  // const [nome, setNome] = useState();

  return (
    <Router>
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
      {/* <h1>Renderização condicional</h1>
      <Condicional/> */}
      {/* <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/> */}
      {/* <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/> */}
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route path='/empresa' element={<Empresa/>}>
        </Route> 
        <Route path='/contato' element={<Contato/>}>
        </Route>  
      </Routes>
     <Footer/>
    </Router>
  )
}

export default App;
