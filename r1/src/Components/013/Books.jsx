function Books({ books }) {

  if (null === books) {

    return <span class="loader"></span>;

  }

  if('ERROR' === books) {

    return ( <h1>ERRORR</h1>);

  }

    return (
        <ul> 
        
        {
             books.map(b =>  <li class="listas" key={b.id}>
                {b.title}
                <img class="foto" src={b.img} alt={b.title}></img>
                </li>)
        }
        </ul>
  );

}

export default Books;
