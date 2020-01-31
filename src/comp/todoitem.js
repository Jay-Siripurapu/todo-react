import React, { Component } from 'react';
class Todoitem extends Component {
    state = {  }
    render() { 
        const {title,hdelete,hedit} =this.props
        return ( 
          <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
              <h6>{title}</h6>
              <div className="todo-icon">
                  <span className="mx-2 text-success" onClick={hedit}>Edit</span>
                  <span className="mx-2 text-danger" onClick={hdelete}>Delete</span>
              </div>
          </li>  
         );
    }
}
 
export default Todoitem;