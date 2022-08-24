// function Bala ({id, type, name, color }) {

//     return (<p>{id}, {type}, {name}, {color}</p>)
// }

function Bala({ seaPlaners }) {
  return (
    <ol>
      {seaPlaners.map((seaPlaner) => (
        <li key={seaPlaner.id}> {seaPlaner.name} <span> {seaPlaner.type}</span></li>
      ))}
    </ol>
  );
}

export default Bala;
