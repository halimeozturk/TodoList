import React , { Component } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import Header from './Components/Header'

class App extends Component {
  render(){
  return (   
    <div >  
        <Header/>
        <TodoForm/>        
    </div>
  )
}
}
export default App;
