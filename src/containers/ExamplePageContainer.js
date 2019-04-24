import ExamplePage from '../ExamplePage';
import {Container} from 'flux/utils';
import ExamplePageStore from '../data/ExamplePageStore';

function getStores(){
    return [
        ExamplePageStore,
    ];
}

function getState(){
    return {
        things: ExamplePageStore.getState(),
    };
}

export default Container.createFunctional(ExamplePage, getStores, getState);
