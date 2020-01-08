import React from 'react'
import {App2} from './Componment/test'

type test={
    input:string,
    list:any[]
}

export class App extends React.Component<{},test>{

    constructor(props:any){
        super(props);
        this.state={
            input:``,
            list:[`aaa`,`bbb`]
        }
    }


    InputChange(e:any){
        this.setState({
            input:e.target.value
        })
    }

    AddChange(){
        this.setState({
            input:``,
            list:[...this.state.list,this.state.input]
        })
    }

    RemoveChange(index:number){
        let state =this.state.list;
        state.splice(index,1)
        this.setState({
            list:state
        })
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <input type="text" value={this.state.input} onChange={this.InputChange.bind(this)} />
                    <button onClick={this.AddChange.bind(this)}>新增</button>
                </div>
                <ul>{
                    this.state.list.map((item,index)=>{
                        return(
                        <li key={index+item} onClick={this.RemoveChange.bind(this,index)} >
                        {item}
                        </li>
                    )
                })
                }
                    <App2 />

                </ul>
            </React.Fragment>
        )
    }
}




