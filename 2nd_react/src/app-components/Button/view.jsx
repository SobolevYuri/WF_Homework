import React from 'react';
import injectSheet from 'react-jss';
import styles from "./style.js";


 class Button extends React.Component {
  
      render() {
          return <button className={this.props.classes.appButton}>Tap this shit!</button>
      }
  }

export default injectSheet(styles)(Button);