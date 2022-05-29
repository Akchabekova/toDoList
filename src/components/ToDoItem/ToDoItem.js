import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


const TodoItem = ({item, index,deleteItem,handleDone })=> {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <div>
                <input type="checkbox" className='form-check-input' id="exampleCheck1" onChange={(e)=>handleDone(e,index)} checked={item.isDone}/>
                <span className= "ms-3">
                {item.title}
            </span>
            </div>
            <button className="btn btn-danger btn-sm" onClick={ ()=>deleteItem(index)}>
                <FontAwesomeIcon icon= {faTrash}/>
            </button>
        </li>
    );
};

export default TodoItem;