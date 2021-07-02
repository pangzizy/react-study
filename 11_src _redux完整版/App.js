import React, { Component } from 'react'
import store from './redux/store'
import {createIncrementAction,createDecrementAction} from './redux/count_action'

export default class App extends Component {
    increment = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAction(value*1))

    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))
        }, 500);
    }

    render() {
        return (
            <div>
                当前求和为：{store.getState()}
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
