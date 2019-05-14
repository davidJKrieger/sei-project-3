import React from 'react'


//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward

const ListItem = (props) =>{
    const campsite = props.campsites.map((campsite) => {
        return (
            <li key={campsite._id}>
                <p>{campsite.name}</p>
            </li>
        );
    });

    return (
        <ul>
            {campsite}
        </ul>
    );
    

}






export default ListItem