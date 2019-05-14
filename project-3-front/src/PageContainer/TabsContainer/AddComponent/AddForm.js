
import React {Component} from 'react'

class AddForm extends Component {
    constructor(){
        super()
        this.state = {
            title = '',
            lat = null,
            long = null,
            notes = ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCampsite();
    }
    //comming from props
    // handleNewCampsite = () => {
    // }

    render(){
        return(
            <Card body>
                <CardTitle>Add a Campsite</CardTitle>
                <form onSubmit = { this.handleSubmit }>
                    <input
                        type="text"
                        name="name"
                        onChange = { this.handleNewCampsite } 
                        placeholder = 'Name your Campsite'
                        value = { this.state.name }
                    />
                    <br />
                    <input
                        type = "number"
                        name = "lat"
                        onChange = { this.handleChange }
                        placeholder = 'Enter latitude coordinate'
                        value = { this.state.lat }
                    />
                    <input
                        type = "number"
                        name = "lng"
                        onChange = { this.handleChange }
                        placeholder = 'Enter longitude coordinates'
                        value = { this.state.lng }
                    />
                    <br />
                    <input
                        type = "text"
                        name = "description"
                        onChange = {this.handleChange}
                        placeholder = 'Describe the site and leave some notes here'
                        value = { this.state.notes }
                    />
                    <Button handleSubmit = { this.handleSubmit }>Submit</Button>
                </form>
            </Card>
        )
    }   
}

export default AddForm