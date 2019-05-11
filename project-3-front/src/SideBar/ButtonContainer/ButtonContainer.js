import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class ButtonContainer extends React.Component {
    render() {
        return (
            <ButtonGroup>
                <Button>Add a Campsite</Button>
                <Button>Update a Campsite</Button>
                <Button>Remove a Campsite</Button>
            </ButtonGroup>
        );
    }
}