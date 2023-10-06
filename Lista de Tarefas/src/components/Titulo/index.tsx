import styles from './Titulo.module.css'

interface Props {
    tag: 'h1' | 'h2';
    label: string;
  }
  
  function Titulo({ tag, label}: Props) {

    if (tag === 'h1') {
      return <h1 className={styles.titulo}>{label}</h1>;
    } else {
      return <h2 className={styles.subtitulo}>{label}</h2>;
    } 
  }
  
  export default Titulo;
