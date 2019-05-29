import React, {Component} from 'react'

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
            </ul>
        )  
            
    }         
}

export default ListItem;