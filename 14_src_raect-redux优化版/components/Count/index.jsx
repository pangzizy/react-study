import React, { Component } from 'react'

export default class Count extends Component {
    increment = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = this.props.count
        if (count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.jiaAsync(value*1,500)
    }

    render() {
        return (
            <div>
                当前求和为：{this.props.count}
                <hr />
                <div>
                    <select ref={c => this.selectNumber = c}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>加</button>
                    <button onClick={this.decrement}>减</button>
                    <button onClick={this.incrementIfOdd}>奇数加</button>
                    <button onClick={this.incrementAsync}>异步加加</button>
                </div>
            </div>
        )
    }
}
