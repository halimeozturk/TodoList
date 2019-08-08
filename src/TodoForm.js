import React,{Component} from 'react';
import TodoList from './TodoList';


class TodoForm extends Component {

    constructor(){
        super();
        this.state ={
            items : ['a','b','c'],
            message : ""
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {items} = this.state;
        const newitem = this.newitem.value;

        const isOnTheList = items.includes(newitem);

        if(isOnTheList){
            this.setState({
                message: 'This item is already on the list.'
            })

        }else{

        newitem !== '' && this.setState({
            items:[...this.state.items,newitem],
            message : ''
        })
    }
        this.addForm.reset();
    }

    removeItem = (item) => {
        const newItem =this.state.items.filter(items=>{
          return items !== item
        });
        this.setState({
          items:[...newItem]
        })
    
        if(newItem.length === 0){
            this.setState({
                message:'No items on your list,add some.'
            })
        }
      }
    
      clearAll = () =>{
          this.setState({
              items : [],
              message:'No items on your list,add some.'
          })
      }

      completed = () => {
          console.log("tamamlandi")     }
    render(){
        const {message,items} = this.state;
        return(
        <div>
                <div class="input-group-text">
                    <form ref={input => this.addForm = input} 
                        onSubmit={this.handleSubmit}>
                        <input ref ={input => this.newitem = input} 
                                placeholder ="Add" type="text"
                                class="h4" />
                        <button type="submit" 
                                class="btn btn-dark">+</button>
                    </form>
                </div>
            <div class="input-group-text">
                {(message !== '' || items.length ===0 ) && <p>{message} </p>} 
            </div>
                <TodoList items={this.state.items}
                          removeItem = {this.removeItem}
                          clearAll ={this.clearAll}
                          completed ={this.completed}
                          />
        </div>
        )
    }

}

export default TodoForm;