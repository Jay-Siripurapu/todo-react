import React, { Component } from 'react';
class Todoinput extends Component {
   
    render() { 
        const {item,handlechange,handleSubmit,editItem} = this.props
        return ( 
          
            <form onSubmit={handleSubmit}>
                <div className="input-group"> 
                  
                   <input type="text" 
                   className="form-control text-capitalize"
                   placeholder="Add TODO"
                   value={item}
                   onChange={handlechange}/>
    <button type="submit" className={editItem?"btn btn-success":"btn btn-primary"}>{editItem ?'Edit item':'Add Item'}</button>
                </div>
            </form>
            
         );
    }
}
 
export default Todoinput;