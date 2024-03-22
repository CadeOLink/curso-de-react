import styles from './Frases.module.css'

function Frases(){
   return(
   <div className={styles.frasesContainer}>
      <p className={styles.frasesContet}>Esse é um componente com uma frase</p>
   </div>
   )
}

export default Frases;