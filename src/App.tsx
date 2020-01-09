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
            list:[`aaa`,`bbb`,`ccc`]
        }
    }

    AddChange(e:any){
        this.setState({
            input:e.target.value
        })
    }
    Add(e:any){
        this.setState({
            list:[...this.state.list,this.state.input]
        })
    }
    Delete(index:any){
        let list=this.state.list;
        list.splice( index,1);
        this.setState({
            list:list
        })

    }

    render(){
        return(
            <React.Fragment>
                <div>
                <input type="text" value={this.state.input} onChange={this.AddChange.bind(this)} />
                <button onClick={this.Add.bind(this)}>新增</button>
                </div>
                <div>
                    {/*<li key={item+index} onClick={this.Delete.bind(this,index )} dangerouslySetInnerHTML={{__html:item}} ></li>*/}
                    <ul>
                        {
                            this.state.list.map(
                                (item,index)=>{return(
                                    <React.Fragment>
                                    <App2 />
                                    </React.Fragment>

                                )}
                            )
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }



}

