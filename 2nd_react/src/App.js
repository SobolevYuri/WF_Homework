import React from 'react';
import {Input, Paragraph, Button} from "./app-components/index";

export default class App extends React.Component {
  constructor(props) {
    super(props);
}

    render() {
        return <React.Fragment>
            <Input />
            <Paragraph />
            <Button />
        </React.Fragment>;
    }
}

