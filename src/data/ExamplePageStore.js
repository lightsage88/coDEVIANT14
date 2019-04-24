import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ExamplePageActionTypes from './ExamplePageActionTypes';
import ExamplePageDispatcher from './ExamplePageDispatcher';
import Thing from './Thing';

class ExamplePageStore extends ReduceStore {
    constructor() {
        super(ExamplePageDispatcher);
    }
    getInitialState() {
        return Immutable.OrderedMap();
    }
    reduce(state, action) {
        switch(action.type) {
            case ExamplePageActionTypes.SET_VALUE:
                //tba
                return state;
            
            default:
                return state;
        }
    }
}
export default new ExamplePageStore();
