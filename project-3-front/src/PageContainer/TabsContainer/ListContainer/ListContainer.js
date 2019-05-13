import React, {Component} from 'react'

//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward
import ListItem from './ListItem'


class ListContainer extends Component {
   constructor(){
      super();
      this.state = {
         campsite: '',
         id:'',
      }
   }
   render(){
      const listItems = this.state.list.map((campsite, index) => {
         return <ListItem key={index} campsite={campsite}></ListItem>

      })
      return (
         <div>Campsite</div>
      )
   }

}


export default ListItem