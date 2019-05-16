import React from 'react'
import {
    Card,
    CardTitle,
    Row,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';



import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditForm from './ListComponent/Modal/EditModal/EditForm/EditForm'
import ListItems from './ListItem';


class ShowComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Edit Campsite</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>

                        <ListItems
                            campsiteToEdit={this.state.campsiteToEdit}
                            campsite={this.state.campsiteToEdit}
                            handleChange={this.handleChange}
                            updateCampsite={this.updateCampsite} 
                        />

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ShowComp