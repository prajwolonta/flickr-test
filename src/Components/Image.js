import React from 'react'

const Image = (props)=>{
    return(

           <div className="col-md-4">
               <div className="image">
                   <img src={props.url} alt="test"/>
                   <button> &hearts; </button>
               </div>
           </div>

    )
}

export default Image