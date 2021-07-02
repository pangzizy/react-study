import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import List from './List'
export default class Message extends Component {
    state = {
        data: [
            {
                id: '1',
                title: '标题1'
            },
            {
                id: '2',
                title: '标题2'
            },
            {
                id: '3',
                title: '标题3'
            },
        ]
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <ul>
                    {
                        data.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递 params 参数 */}
                                    {/* <Link to={`/home/message/list/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                                    {/* 向路由传递 search 参数 */}
                                    {/* <Link to={`/home/message/list?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                    {/* 向理由传递state 参数 */}
                                    <Link to={{ pathname: '/home/message/list', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收 params 参数 */}
                {/* <Route path="/home/message/list/:id/:title" component={List} /> */}
                {/* search 参数 无需声明接收 正常注册即可 */}
                {/* <Route path="/home/message/list" component={List} />  */}
                {/* state 参数无需声明接收 正常注册即可 */}
                <Route path="/home/message/list" component={List} />
            </div>
        )
    }
}
