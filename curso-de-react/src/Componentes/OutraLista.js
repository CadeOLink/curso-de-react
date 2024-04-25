function OutraLista({ itens }){
   return(
      <>
      <h3>Lista de coisas boas</h3>
      { itens.length > 0 ?(
         itens.map((item, indicie) => (
            <p key={indicie}>{item}</p>
         ))) : (
         <p>Não há itens</p>
      )}
      </>
   )
}

export default OutraLista;