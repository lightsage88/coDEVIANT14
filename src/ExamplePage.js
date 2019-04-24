import React from 'react';
import logo from './logo.svg';
import './examplePage.css';
import Form from './Form';

export default class ExamplePage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nameForm1: "First Name",
            nameForm2: "Favorite Food",
            typeForm1: "input",
            typeForm2: "input",
            typeForm3: "submit",
            valueForm1: "",
            valueForm2: "",
            valueForm3: ""
        }
    }

    render(){
        return (
            <div>
                <Form 
                    humanReadableName1={this.state.nameForm1}
                    humanReadableName2={this.state.nameForm2}
                    inputType1={this.state.typeForm1}
                    inputType2={this.state.typeForm2}
                    inputType3={this.state.typeForm3}
                    computerReadableName1={(this.state.nameForm1)
                                           .replace(/\s/g,"").toLowerCase()  
                                           }
                    computerReadableName2={(this.state.nameForm2)
                                        .replace(/\s/g,"").toLowerCase()
                                        }
                    
                    defaultValue1={this.state.valueForm1}
                    defaultValue2={this.state.valueForm2}
                    submitValue={this.state.valueForm3}
                 />
            </div>

        )
    }

}