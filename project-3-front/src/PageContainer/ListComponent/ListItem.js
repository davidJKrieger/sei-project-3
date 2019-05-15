import React from 'react'


//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward


const ListItems = (props) => {

    const campsiteList = props.campsites.map((campsite) => {
        return (
            <li key={campsite._id}>
                <div>{campsite.name}</div>
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