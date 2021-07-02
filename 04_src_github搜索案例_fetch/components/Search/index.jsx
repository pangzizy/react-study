import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    // 点击搜索
    handleSearch = async () => {
        // 连续结构赋值 const { keyWordElement: { value } } = this

        // 连续解构赋值加重命名 
        const { keyWordElement: { value: keyWord } } = this
        // 发布消息
        PubSub.publish('myPubSub', {
            isLoading: true,
            isFirst: false
        })
        try {
            const res = await fetch(`/api1/search/users2?q=${keyWord}`)
            const data = await res.json()
            PubSub.publish('myPubSub', {
                isLoading: false,
                users: data.items
            })
        } catch (error) {
            PubSub.publish('myPubSub', {
                isLoading: false,
                err: error.message
            })
        }


    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input type="text" ref={c => this.keyWordElement = c} placeholder="enter the name you search" />&nbsp;<button onClick={this.handleSearch}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
