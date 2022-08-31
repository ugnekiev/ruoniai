

const Pokemon = ({vardas, urlas}) => {
       
    return <li>{vardas} <a href={urlas}>daugiau info apie {vardas}</a> </li>;
    
  };
  
  export default Pokemon;
  