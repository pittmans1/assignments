import React from "react";
import {UglyThingsConsumer} from "./UglyThings"

function UglyLists(props){
    return(
       <UglyThingsConsumer>
           {({UglyList, deleteU, editU}) => (
               <div className="container">
                   {UglyList.map((l) => {
                       return(
                           <div>
                                 <div className="header">
                                    <p className="header">{l.title}</p>
                                    <div className="description">{l.description}</div>
                                </div>
                                 <button onClick={() => { deleteU(l._id) }}
                                 id="deleteButton">Delete
                             </button>
                             <button onClick={() => { editU(l._id) }}
                                 id="editButton">Edit
                             </button>
                                <img className="image" src={l.imgUrl} alt={l.title} />
                         </div>
                       )
                   })}
               </div>
           )
           }
       </UglyThingsConsumer>
    )
}
export default UglyLists