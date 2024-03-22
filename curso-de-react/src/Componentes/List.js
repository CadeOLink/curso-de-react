import Item from './Item'

function List (){

   return(

      <>
         <h1>Minha lista</h1>
         <ul>
            <Item marcas="Fiat"/>
            <Item marcas="Ford"/>
            <Item marcas="Isso ai"/>
         </ul>
      </>

   )

}

export default List