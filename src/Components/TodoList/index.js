import React , { Component } from 'react';
import './index.css'
class TodoList extends Component {


  render(){
    const items = this.props.items.map((elem,i) =>{
      return(
        <div key={i} className="TodoList">
          <span className="text">{i+1}. {elem}</span>
          <div >
          <button  type="button"  onClick={(e)=>this.props.removeItem(elem)}>Delete</button>
          <button  type="button" onClick={(e)=>this.props.clearAll(e)}>x</button>
          </div>
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