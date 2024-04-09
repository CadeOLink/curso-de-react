import Item from './Item'

function List (){

   return(

      <>
         <h1>Minha lista</h1>
         <ul>
            <Item marca="Fiat" ano_lancamento={1821}/>
            <Item marca="Ford" ano_lancamento={1900}/>
            <Item marca="Chevorled" ano_lancamento={1911}/>
            <Item/>
         </ul>
      </>

   )

}

export default List