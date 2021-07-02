import React, { Component } from 'react'
// import qs from 'querystring'

const DetailData = [
    {
        id: '1',
        content: '我是标题1的内容'
    },
    {
        id: '2',
        content: '我是标题2的内容'
    },
    {
        id: '3',
        content: '我是标题3的内容'
    }
]
export default class List extends Component {
    render() {
        // const { id, title } = this.props.match.params //接收params参数
        // const { search } = this.props.location;//接收search 参数
        // const { id, title } = qs.parse(search.slice(1))
        const { id, title } = this.props.location.state //接收state 参数

        const findResult = DetailData.find((listObj) => {
            return listObj.id === id
        })
        return (
            <div>
                <p>id:{id}</p>
                <p>标题:{title}</p>
                <p>内容:{findResult.content}</p>
            </div>
        )
    }
}
