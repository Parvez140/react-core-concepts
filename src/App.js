import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends = ['Showrov','Emon','Jahed','Rahman','Polas','Tutul']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'},
    {name: 'UI', price:'$10.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color:'skyblue'}}>I am React Person</h1>
        <Counter></Counter>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ul>
        {
            products.map(product => <Product product={product}></Product>)
          }

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <p>(props is a short word of property)</p>
        <Person name="Parvez" job="Make Website"></Person>
        <Person name="Mohiuddin" job="Make Website"></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )

}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    color:'orange',
    margin:'5px'
  }
  const {name,price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border:'2px solid gold', margin:'5px',padding:'10px',color:'skyblue'}}>
      <h3>My Name : {props.name}</h3>
      <p>My Profession : {props.job}</p>
    </div>
  )
}

export default App;
