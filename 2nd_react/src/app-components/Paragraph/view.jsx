import React from 'react';
import injectSheet from 'react-jss';
import {styles} from "./style.js";

class Paragraph extends React.Component {

    render() {
        return <p className={this.props.classes.textField}>Some text</p>
    }
}

export default injectSheet(styles)(Paragraph);