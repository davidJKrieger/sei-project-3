import React from 'react'


//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward


const ListItems = (props) => {

   

    const campsiteList = props.campsites.map((campsite) => {
        
        const showSelected = () => {
            props.selectACampsite.bind(null, campsite._id) 
            props.toggleTwo()
        }


        return (
            <li key={campsite._id}>
                <h2>{campsite.name}</h2>
                <button className="btn btn-outline-secondary btn-sm" onClick={ showSelected }>Edit {campsite.name}</button>
                <button className="btn btn-outline-danger btn-sm" onClick={props.deleteCampsite.bind(null, campsite._id)}>Delete {campsite.name} </button>
            </li>

        )
    })

    return (
        <ul>
            {campsiteList}
        </ul>
    )

}

export default ListItems;