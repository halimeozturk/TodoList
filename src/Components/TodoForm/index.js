import React,{Component} from 'react';
import TodoList from '../TodoList';
import './index.css'

class TodoForm extends Component {

    constructor(){
        super();
        this.state ={
            items : [],
            message : "",
            text:"",
            status:'passive',
            doneTask: []
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
                message : '',
                done:false
            })
        }
        this.addForm.reset();
    }
    
    // changeUserInput = (input) => {     // another way to add text
    //     this.setState({
    //         text : input,
    //     })

    // }

    // addTodoList = (input) => {
    //     let newitems = this.state.items;
    //     newitems.push(input);
    //     this.setState({
    //         items:newitems,
    //         text:""
    //     })

    // }

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
			
    // removeItem = (index,e) => {
    // 	const item = Object.assign([],this.state.items);
    // 	item.splice(index,1);
    // 	this.setState({
    // 		items : item
    // 	})
    // }     

    clearAll = () =>{
        this.setState({
            items : [],
            message:'No items on your list,add some.'
        })
    }
    
    render(){
        const {message,items} = this.state;
        return(
        <div className="TodoForm" >
                <div >
                    <form ref={input => this.addForm = input} 
                        onSubmit={this.handleSubmit}>
                        <input ref ={input => this.newitem = input} placeholder ="New To Do" type="text"/>
                        <button type="submit" >+</button>
                    </form>
                    <div style={{color:"#800000"}}>
                        {(message !== '' || items.length ===0 ) && <p>{message} </p>}    
                    </div>             
                </div>

                <TodoList items={this.state.items}
                          removeItem = {this.removeItem}
                          clearAll ={this.clearAll}
                          completed ={this.completed}
                          status = {this.state.status}
                          doneTask = {this.doneTask}/>
            {/* <div class="input-group-text">
                    <input
                          onChange={(e)=>this.changeUserInput(e.target.value)}
                          value={this.state.text}
                          type="text"/>

                    <button onClick={()=>this.addTodoList(this.state.text)} type="button">click</button>
            </div> */}
        </div>
        )
    }

}

export default TodoForm;