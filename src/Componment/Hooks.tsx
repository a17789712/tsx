import React, { Component,useState,useEffect } from 'react';

function Hooks(){
    const [count,setcount]=useState(0);
    useEffect(()=>{
        console.log(111);
        return()=>{
            console.log(222);
        }
    },[count])//如果[]中有值，发生改变才会进行解绑
         //当[]没有值，在不使用当前这个方法或函数时才会解绑
    return(
            <div>
            <button onClick={()=>{setcount(count+1)}}>click</button>
            {count}
            </div>
    )
}

// interface IState{
//     count:number
// }
// class Hooks extends Component<{},IState> {
//     constructor(props:any){
//         super(props);
//         this.state={
//             count:1
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.change.bind(this)}>click</button>
//                 {this.state.count}
//             </div>
//         );
//     }
//     change(){
//         this.setState({count:this.state.count+1})
//     }
// }

export default Hooks;