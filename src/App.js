//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './Button';
import Input from './Input';

function App() {
  //let a = 'abc';
  //let b = 10
  //let c = ['a', 'b', 'c', 'd']

  /* let object = [
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
  ] */
  
  //let arr = [] //simple array
  const [arr, setArr] = useState([]);  // destructuring of array
  const [todo, setTodo] = useState('');

  let addTodo = () =>{
    console.log(todo)
    arr.push(todo);
    setArr([...arr])
  }

  let del = (ind) => {
    arr.splice(ind, 1);
    setArr([...arr])
  }
  let edit = (ind) => {
    let a = prompt('Update Value', arr[ind])
    arr[ind] = a;
    setArr([...arr])
  }

  let deleteAll = () => {
    setArr([])
  }

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
        <Input onChange={(e)=>{ setTodo(e.target.value) }}/>
        {/* <input onChange={(e)=>{ setTodo(e.target.value) }}/> */}

        <Button click={addTodo} btnValue="Add Todo"></Button>

        <Button click={deleteAll} btnValue="Delete All"></Button>


        {/* <button onClick={addTodo}>Add</button>   */}
        <p>I'll do: {todo}</p>

        <ol>
          {
          arr.map((x, i) => {
            return <li key={i}> {x} 
            <Button click={()=>{edit(i)}} btnValue="Edit"></Button> 
            <Button click={()=>{del(i)}} btnValue="Delete"></Button> 
            </li>
          })
          }
        </ol>



      </header>
    </div>
  );
}

export default App;
