import React, {Component} from 'react'
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