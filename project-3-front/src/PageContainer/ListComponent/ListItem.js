import React, {Component} from 'react'
import { renderComponent } from 'recompose';


//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward


class ListItem extends Component {
    constructor(){
        super()
        this.state = {
            id: null,
            name: '',
            lat: 0,
            lng: 0,
            notes: ''
        }
    }


    render(){
        const campsiteList = this.props.campsites.map((campsite) => {
            return(
                <li key={campsite._id}>
                    <h2>{campsite.name}</h2>
                    <button className="btn btn-outline-secondary btn-sm" onClick={this.props.selectCampsite.bind(null, campsite._id)}>Edit {campsite.name}</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={this.props.deleteCampsite.bind(null, campsite._id)}>Delete {campsite.name} </button>
                </li>


            )
 
        })
            return (
                    <ul>
                        {campsiteList}
                    </ul >
                    )  
                
    }
            
}

export default ListItem;