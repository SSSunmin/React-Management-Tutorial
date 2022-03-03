import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image':'https://placeimg.com/150/150/any',
  'name' : '임선민',
  'birthday':'931129',
  'gender':'여자',
  'job': '플머'
},
{
  'id' : 2,
  'image':'https://placeimg.com/150/150/1',
  'name' : '박소영',
  'birthday':'930821',
  'gender':'여자',
  'job': '디자이너'
},
{
  'id' : 3,
  'image':'https://placeimg.com/150/150/2',
  'name' : '김정은',
  'birthday':'931029',
  'gender':'여자',
  'job': '품질관리'
},
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=>{ return(<Customer key ={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})
        }
    
      </div>
    );
  }
}

export default App;
