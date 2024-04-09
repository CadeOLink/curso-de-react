import Button from "./Evento/Button"

function Evento (){
   function meuEvento (){
      console.log(`Opa, ui ativado`)
   }

   function segundoEvento(){
      console.log(`Ativando o segundo evento`)
   }
   return (
      <div>
         <p>Clique para disparar</p>
         <Button event={meuEvento} text="Meu primeiro Evento"/>
         <Button event={segundoEvento} text="Meu segundo Evento"/>
      </div>
   )
}

export default Evento