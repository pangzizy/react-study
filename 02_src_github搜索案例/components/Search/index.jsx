import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    // 点击搜索
    handleSearch = () => {
        // 连续结构赋值 const { keyWordElement: { value } } = this

        // 连续解构赋值加重命名 
        const { keyWordElement: { value: keyWord } } = this
        this.props.updateAppState({
            isLoading: true,
            isFirst: false
        })
        // 发送网络请求
        axios.get(`/api1/search/users?q=${keyWord}`).then(

            response => {
                const data = response.data
                this.props.updateAppState({
                    isLoading: false,
                    users: data.items
                })
            },
            error => {
                this.props.updateAppState({
                    isLoading: false,
                    err: error.message
                })
            }
        )
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
