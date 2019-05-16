import React from 'react'
import { Button }from 'reactstrap';
import EditComp from './EditComp'


//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward


const ListItems = (props) => {
    const showModal = (props) => {
        return(
            <EditComp
                handleSubmit={props.handleSubmit}
                handleChange={props.handleChange}
                updateCampsite={props.updateCampsite}
                campsiteToEdit={props.campsiteToEdit}
            />
        )
    }
    const campsiteList = props.campsites.map((campsite) => {
        return (
            <li key={campsite._id}>
                <h3 className="campsite-list-item">{campsite.name}</h3>
                <button className="btn btn-outline-danger btn-sm" onClick={props.deleteCampsite.bind(null, props.campsite._id)}>Delete {props.campsite.name} </button>
                <button className="btn btn-outline-secondary btn-sm" onClick={showModal.bind(null, props.campsite._id)}>Edit {campsite.name} </button>
            </li>

        )
    })
    return (
        <ul >
            {campsiteList}
        </ul>
    )
}

export default ListItems;