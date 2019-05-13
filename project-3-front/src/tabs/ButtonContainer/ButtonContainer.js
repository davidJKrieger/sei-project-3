import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class ButtonContainer extends React.Component {
    constructor() {
        super();
        this.campsites = []
    }
    componentDidMount() {
        this.getCampsites()
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }
    showModal = (campsite) => {
        console.log(campsite, '<-- in showModal')
        this.setState({
            modalShowing: true,
            edtitCampsite: campsite
        });
    }

    addCampsite = async (e) => {
        e.preventDefault();

        try {
            const addedCampsite = await fetch('http://localhost:9000/api/v1/campsites', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(addedCampsite),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const parsedResponse = await addedCampsite.json();
            console.log(parsedResponse)
            this.setState({ campsites: [...this.state.campsites, parsedResponse.data] })

        } catch (err) {
            console.log(err)
        }
    }
    getCampsites = async () => {
        try {
            const response = await fetch('http://localhost:9000/api/v1/campsites', {
                credentials: 'include'
            });

            if (response.status !== 200) {
                // for http errors, Fetch doesn't reject the promise on 404 or 500
                throw Error(response.statusText);
            }

            const responseParsed = await response.json();
            // after setState render is automatically called

            this.setState({ campsites: responseParsed.data });

        } catch (err) {
            console.log(err);
        }
    } 
    render() {
        return (
            <ButtonGroup>
                <Button handleChange={this.handleChange}>Add a Campsite</Button>
                <Button>Update a Campsite</Button>
                <Button>Remove a Campsite</Button>
            </ButtonGroup>
        );
    }
}