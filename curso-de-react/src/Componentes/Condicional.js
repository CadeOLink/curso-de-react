import { useState } from "react"

function Condicional(){

   const [ email, setEmail] = useState();
   const [ userEmail, setUserEmail] = useState();

   function enviarEmail(e){
      e.preventDefault();
      setUserEmail(email);
      console.log(setUserEmail)
   }

   function limparEmail(){
      setUserEmail('');
   }

   return(
      <div>
         <h2>Cadastre o seu e-mail:</h2>
         <form>
            <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
         </form>
         {userEmail && (
            <>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
            </>
         )
         }
      </div>
   )

}

export default Condicional