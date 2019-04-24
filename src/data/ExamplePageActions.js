// data/ExamplePageActions.js 
import ExamplePageActionTypes from './ExamplePageActionTypes.js';
import ExamplePageDispatcher from './ExamplePageDispatcher.js';
//NOTE: yes I know that when we exported the dispatcher we didn’t give it a name, but that file name apparently is the name of the dispatcher and it just has to be that way. If the file were ChickenDispatcher.js then we would have written:
//import ChickenDispatcher from ‘./ChickenDispatcher.js’;  at least that’s my //understanding
const Actions = {
    
    setValue(text) {
        ExamplePageDispatcher.dispatch({
            type: ExamplePageActionTypes.SET_VALUE,
            text,
//Note, we don’t need to set text: text because the newest versions of //JavaScript assume the value of a key/value pair if the key and the //value share the same name
        });
    },
};
export default Actions;
