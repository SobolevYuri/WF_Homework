import React from 'react';
import injectSheet from 'react-jss';
import styles from "./style.js";

class Input extends React.Component {
  
      render() {
          return <input type="text" className={this.props.classes.inputField} />
      }
  }

  export default injectSheet(styles)(Input);