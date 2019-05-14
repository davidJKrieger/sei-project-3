
import React { Component } from 'react'

class AddForm extends Component {
    constructor() {
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
        this.props.editCampsite();
    }
    //comming from props
    // handleEditCampsite = () => {
    // }

    render() {
        return(
            <Card body>
                <CardTitle>Edit This Campsite</CardTitle>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" name="title" onChange={this.handleChange} />
                    <br />
                    <input 
                        type = "number"
                        name = "lat" 
                        onChange = { this.handleChange }
                        placeholder = { this.props.lat }
                        value = { this.state.lat }
                    />
                    <input 
                        type = "number"
                        name = "lng" 
                        onChange = { this.handleChange }
                        value = { this.state.lng }
                    />
                    <br />
                    <input 
                        type="text" 
                        name="notes" 
                        onChange = { this.handleChange }
                    />
                    <Button handleSubmit={this.handleSubmit}>Submit</Button>
                </form>
            </Card>
        )
    }
}