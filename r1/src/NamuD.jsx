import './App.scss';
import Tekstai from './Components/namuDarbai/Tekstai';
import Zb from './Components/namuDarbai/Zb';
import rand from './Functions/rand';
import Bala from './Components/namuDarbai/Bala';
import Tvenkinys from './Components/namuDarbai/Tvenkinys';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

const seaPlaners = [
  {id: 1, type: 'man', name: 'Lina', color: 'blue'},
  {id: 2, type: 'car', name: 'Opel', color: 'red'},
  {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
  {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
  {id: 5, type: 'man', name: 'Tomas', color: 'green'},
  {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
  {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
  {id: 8, type: 'car', name: 'MB', color: 'blue'},
  {id: 9, type: 'car', name: 'ZIL', color: 'red'},
  {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
];

function NamuD() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Namu darbai</h1>
        <>
            <h2 style={{color: "pink"}}>LABAS, ZUIKI!</h2>
        
            <Zb color={rand(1, 2)}/>
      
            <Tekstai/>

            
              <div className="dog-bin">
                {
                dogs.map((d, i) => <div key={i} className={'dog ' + (i % 2 ? 'sq' : 'cc')} >{d}</div>)
                }
              </div>
              <div className="dog-bin">
                {
                dogs.map((d, i) => (d[0] !== d[0].toLocaleLowerCase()) ? <div key={i} className={"dog sq"} >{d}</div> : null)
                }
              </div>
              <div className="dog-bin">
                {
                dogs.map((d, i) => <div style={{color: d.length > 6 ? 'green' : 'crimson'}}key={i} className={"dog sq"}>{d.length}</div>)
                }
              </div>

              {/* Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners. */}
              {/* Sukurti du komponentus Tvenkinys, Daiktas -  tėvinį ir vaikinį atitinkamai.
              Tvenkinys komponente du kartus panaudokite komponentą Daiktas atvaizduoti 
              masyvą seaPlaners - vieną kartą poriniams kitą kartą neporiniams įrašams (pagal id, ne masyvo indeksą). */}
            
              {/* <Bala/> */}
              {/* {
                seaPlaners.map(seaplanerObj=> <Bala key={seaplanerObj.id} type={seaplanerObj.type} name={seaplanerObj.name} color={seaplanerObj.color}/> )
              } */}

              <Bala seaPlaners={seaPlaners}/>

              <Tvenkinys seaPlaners={seaPlaners}/>
        </>  
       

      </header>
    </div>
  );
}

export default NamuD;