import React from "react";
import PropTypes from 'prop-types';


interface IProps {
    item:any[],
    index:number,
    delete(index:number):void
}
export default class App2 extends React.Component<IProps>{
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

// App2.PropTypes  = {
//     item:PropTypes.string,
//     key:PropTypes.string,
//     index:PropTypes.number,
//     delete:PropTypes.func
// }







