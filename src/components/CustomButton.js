import React from 'react';
import Button from '@material-ui/core/Button';

function CustomButton(props) {
    return (
        <div>
            <Button variant="contained">{props.text}</Button>
        </div>
    )
}

export default CustomButton;