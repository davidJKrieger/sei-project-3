import React, {Component} from 'react'

//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward

import TabsContainer from './TabsContainer/TabsContainer'
import Header from './Header/Header'
import MapContainer from './MapContainer/MyMapComponent'

class PageContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            campsites: [],
            campsiteToEdit: {
                _id: null,
                campsite: '',
                lat: 0,
                lng: 0,
            },
        };
    }
    componentDidMount() {
        this.getCampsites()
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
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

            this.setState({
                campsites: responseParsed.data
            });

        } catch (err) {
            console.log(err);
        }
    }
    updateCampsite = async (e) => {
        e.preventDefault();

        try {
            const editResponse = await fetch('http://localhost:9000/api/v1/campsites/' + this.state.campsiteToEdit.id, {
                method: 'PUT',
                body: JSON.stringify(this.state.campsiteToEdit),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const parsedResponse = await editResponse.json();
            const editedCampsites = this.state.campsite.map((campsite) => {
                if (campsite._id === this.state.campsiteToEdit.id) {
                    campsite = parsedResponse.data;
                }
                return campsite
            })

            this.setState({
                campsites: editedCampsites,
            });
        } catch (err) {
            console.log(err)
        }
    }
    render(){


        return(
            <div>
            <MapContainer />
            <Header />

            <TabsContainer />
            </div>

        )



    }




}

export default PageContainer

