import React, { Component } from 'react';
import Todoitem from './todoitem';
class Todolist extends Component {
    state = {  }
    render() { 
        const {items,clear,hdelete,hedit } = this.props
        return ( 
           <ul className="list-group my-5">
               {/* <h3 className="text-capitalize text-center">Todo List</h3> */}
               {items.map(item=>{return(
                 <Todoitem key={item.id} title={item.title}
                 hdelete={()=>hdelete(item.id)}
                 hedit={()=>hedit(item.id)}
                 />
               )})}
               <button type="button" className="btn btn-danger btn-block mt-3"
               onClick={clear}
               >Clear</button>
            </ul>
         );
    }
}
 
export default Todolist;