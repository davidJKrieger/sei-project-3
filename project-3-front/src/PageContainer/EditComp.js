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


class EditComp extends React.Component {
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
                            <CardTitle>Edit This Campsite</CardTitle>
                            <Form onSubmit={props.handleSubmit}>
                                <FormGroup>
                                    <Row>
                                        <Input
                                            type="text"
                                            name="name"
                                            onChange={props.handleChange}
                                            placeholder='Name your Campsite'
                                            value={props.campsite.name}
                                        />
                                    </Row>
                                    <Row>
                                        <Input
                                            type="number"
                                            name="lat"
                                            onChange={props.handleChange}
                                            placeholder={props.lat}
                                            value={props.campsite.lat}
                                        />
                                        <Input
                                            type="number"
                                            name="lng"
                                            onChange={props.handleChange}
                                            value={props.campsite.lng}
                                        />
                                    </Row>
                                    <Row>
                                        <Input
                                            type="text"
                                            name="notes"
                                            onChange={props.handleChange}
                                        />
                                    </Row>
                                    <Row>
                                        <input type="submit" value="Submit" />
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

export default EditComp