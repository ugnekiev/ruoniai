import './App.css';
import Bin from './Components/010/Bin';
import Square from './Components/010/Square';

const squares = [
    {color: 'black', name:'Valio', size: 88, show: true},
    {color: 'white', name:'Hello', size: 144, show: true},
    {color: 'crimson', name:'Geras', size: 201, show: false},
    {color: 'skyblue', name:'Neblogas', size: 333, show: true},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Props</h1>
        {
            <Bin color="crimson" size={160}/>
        }
        {/* <Square color='black' name='pirmadienis' size={200} show={false}></Square>
        <Square color='crimson' name='šeštadienis' size={100} show={true}></Square>
        <Square color='crimson' name='Valio' size={301} show={true}></Square> */}
        {/* {
            squares.sort((a, b)=> b.size - a.size).map((s, i)=> <Square key={i} color={s.color} name={s.name} show={s.show}/>)
        } */}
        {
            squares.filter(sq => sq.size < 200).map((s, i)=> <Square key={i} color={s.color} name={s.name} show={s.show}/>)
        } 
        
      </header>
    </div>
  );
}

export default App;