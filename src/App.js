//import logo from './logo.svg';
import './App.css';

function App() {
  //let a = 'abc';
  //let b = 10
  //let c = ['a', 'b', 'c', 'd']

  let object = [
    {
      name: 'Rizwan', 
      age: 10
    },
    {
      name: 'Usman',
      age: 4
    },
    {
      name: 'Hannan',
      age: 13
    }
  ]
  let arr = [];
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>RizanKhan Blockchain</h1>
        {/* <p>{a}</p> */}

        {/* <p>The Square Of {b} is {b}*{b}</p> */}

        {/* <p>{c}</p> */}
        {/* <ul>
          {
            c.map((x, i) => { // yhn hmny i ko unique key use kiya
              return <li key={i}> {x}</li>
            })
          }
        </ul> */}

        {/* <ol>
          {object.map((x, i) => {
            return <li key={i}> {x.name} is {x.age} years old</li>
          })}
        </ol> */}





      </header>
    </div>
  );
}

export default App;
