import React, { Component, Fragment } from 'react'

const MyContext = React.createContext()
const { Provider,Consumer } = MyContext

export default class Demo extends Component {
    state = {
        username: 'tom',
        age: 18
    }
    render() {
        const { username, age } = this.state
        return (
            <Provider value={{ username, age }}>
                <h2>我是A组件</h2>
                <h4>我的用户名是：{username}</h4>
                <B />
            </Provider>
        )
    }
}

class B extends Component {
    render() {
        return (
            <Fragment>
                <h2>我是b组件</h2>
                <h4>我从A组件接收到的用户名是：</h4>
                <C />
            </Fragment>
        )
    }
}


// class C extends Component {
//     // 声明接收context
//     static contextType = MyContext
//     render() {
//         const {username,age} = this.context
//         return (
//             <Fragment>
//                 <h2>我是C组件</h2>
//                 <h4>我从A组件接收到的用户名是：{username},年龄是：{age}</h4>
//             </Fragment>
//         )
//     }
// }

function C() {
    return (
        <Fragment>
            <h2>我是C组件</h2>
            <h4>我从A组件接收到的用户名是：</h4>
            <Consumer>
                {
                    value=>{
                        return `${value.username},年龄是:${value.age}`
                    }
                }
            </Consumer>
        </Fragment>
    )
}