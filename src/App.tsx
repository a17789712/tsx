import React from "react";
import App2 from "./Componment/test";

// type Data={
//     input:string,
//     list:any[]
// }
// interface IProps{
//     aaa:any
// }
interface IState {
    input:string,
    list:any[]
}
export class App extends React.Component<{},IState>{
    public aaa:any;
    constructor(props:any){
        super(props);
        this.state={
            input:``,
            list:[`test1`,`test2`,`test3`]
        }

    }

    Change=(e:any)=>{ this.setState({input:e.target.value}) }
    Add=(e:any)=>{  this.setState({list:[...this.state.list,this.state.input]})  }
    Delete=(index:number)=>{
        let state=this.state.list;
        state.splice(index,1);
        this.setState({list: state})

    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <label htmlFor="input" >定位</label>
                    <input
                        id="input"
                        value={this.state.input}
                        onChange={this.Change.bind(this)}
                        ref={ input => this.aaa=input }
                    />
                    <button onClick={this.Add.bind(this)}>新增</button>
                </div>
                <div>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <React.Fragment>
                                    {/*<li key={index+item} onClick={this.Delete.bind(this,index)}>*/}
                                    {/*    {item}*/}
                                    {/*</li>*/}
                                    <App2  item={item} key={index+item}  index={index} delete={this.Delete.bind(this)}  />
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}























