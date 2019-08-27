import React , { Component } from 'react';
import './index.css'
class TodoList extends Component {


  render(){
    const items = this.props.items.map((elem,i) =>{
      return(
        <div key={i} className="TodoList">
          <span className="text">{i+1}. {elem}</span>
          <span >
          <button className="button1"  type="button"  onClick={(e)=>this.props.removeItem(elem)}>Delete</button>
          <button className= "button2" type="button" onClick={(e)=>this.props.clearAll(e)}>x</button>
          </span>
        </div>
      )
    })

  return (
    <div >
      {items}      
    </div>
  );
}
}
export default TodoList;