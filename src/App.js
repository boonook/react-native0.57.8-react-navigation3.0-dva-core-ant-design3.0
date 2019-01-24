import React,{Component} from 'react';
import Url from "./Router";
import dva from './utils/dva';
import * as models from './models';
export default class App extends Component{
    render(){
        const Model = (models=>{
            let ModelsArr = [];
            for(let i in models){
                ModelsArr.push(models[i])
            }
            return ModelsArr;
        })(models);

        const app = dva({
            initialState: {},
            models: Model,
            extraReducers: {},
            onAction: [],
            onError(e) {
                console.log('onError', e)
            },
        });
        const AppUrl = app.start(<Url/>);
        return (
            <AppUrl/>
        )
    }
}