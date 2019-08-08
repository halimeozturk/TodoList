import React , { Component } from 'react';

class TodoList extends Component {


  render(){
    const items = this.props.items.map((elem,i) =>{
      return(
        <div key={i}>
          <span class="input-group-text">{i+1}. {elem}</span>
          <span class="input-group-text">
          <button class="btn btn-dark" type="button"><i class="fa fa-trash" onClick={(e)=>this.props.removeItem(elem)}></i></button>
          <button type="button" class="btn btn-dark" onClick={(e)=>this.props.completed(e)}>✓</button>
          </span>
        </div>
      )
    })

  return (
    <div>
      {items}
      <div class="input-group-text">         
         <button type="button" class="btn btn-dark" onClick={(e)=>this.props.clearAll(e)}>x</button>

      </div>
      
      
    </div>
  );
}
}
export default TodoList;
