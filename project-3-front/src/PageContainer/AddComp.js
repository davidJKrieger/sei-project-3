import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditForm from './EditForm/EditForm'
import {
    Card,
    CardTitle,
    Row,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';

class AddComp extends React.Component {
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
                        <Card body>
                            <CardTitle>Add a Campsite</CardTitle>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Row>
                                        <Input
                                            type="text"
                                            name="name"
                                            onChange={this.handleChange}
                                            placeholder='Name your Campsite'

                                        />
                                    </Row>
                                    <Row>
                                        <Input
                                            type="number"
                                            name="lat"
                                            onChange={this.handleChange}
                                            placeholder='Enter the latitude coordinate'

                                        />
                                        <Input
                                            type="number"
                                            name="lng"
                                            onChange={this.handleChange}
                                            placeholder='Enter the longitude coordinate'

                                        />
                                    </Row>
                                    <Row>
                                        <Input
                                            type="text"
                                            name="notes"
                                            onChange={this.handleChange}
                                            placeholder='Describe the site and leave some notes here'
                                        />
                                    </Row>
                                </FormGroup>
                            </Form>
                        </Card>
                        
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
export default AddComp