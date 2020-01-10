import React from "react";

interface Data {
    item:any[],
    index:number,
    delete(index:number):void
}

export default class App2 extends React.Component<Data>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <li onClick={this.props.delete.bind(this,this.props.index)}>
                {this.props.item}
            </li>
        )
    }
}



