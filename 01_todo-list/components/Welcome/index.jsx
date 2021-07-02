import React,{Component} from 'react';
import welcome from "./index.module.css"

export default class Welcome extends Component{
    render(){
        return(
            <div>
                <h1 className={welcome.title}>222</h1>
            </div>
        )
    }
}