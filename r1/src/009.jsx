import './App.css';
// import White from './Components/009/White';
// import Black from './Components/009/Black';
import rand from './Functions/rand';

//import Bebras from './Components/009/Bebras';
//import Chrizentema from './Components/009/Chrizentema';


const cats = [
  {name: 'Pilkis',  color: 'gray'},
  {name: 'Ufo', color: 'yellow'},
  {name: 'Pukis', color: 'white'},
  {name: 'Bulkius', color: 'skyblue'},
]


 function App() {
   return (
     <div className="App">
       <header className="App-header">

         {/* <h1>Labas</h1> */}
         {/* {
         rand(0, 1) ? <Black/> : <White/>    
        } */}
        
         {/* <Bebras></Bebras>
         <Chrizentema></Chrizentema> */}
         
          {/* <div className="cat" style={{backgroundColor: cats[0].color}}><span>{cats[0].name}</span></div>,
          <div className="cat" style={{backgroundColor: cats[1].color}}><span>{cats[1].name}</span></div>,
          <div className="cat" style={{backgroundColor: cats[2].color}}><span>{cats[2].name}</span></div> */}

          {
            cats.map((cats, i) => <div key={i} className="cat App-logo" style={{backgroundColor: cats.color}}><span className="App-logo2">{cats.name}</span></div>)
          }

         
       </header>
     </div>
   );
 }
 export default App;