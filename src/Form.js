import React from 'react';
// import './form.css';
export default function Form(props) {
    return (
        <div className='form'>
            <form>
                {props.humanReadableName1}
                <input type={props.inputType1} 
                name={props.computerReadableName1}         
                value={props.defaultValue1}       />
            
                {props.humanReadableName2}
                <input type={props.inputType2} 
                name={props.computerReadableName2}         
                value={props.defaultValue2}       />
            
                <input 
                type={props.inputType3}
                value={props.submitValue}
                />
            </form>
        </div>
    );
};
