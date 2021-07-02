import React, { Component } from 'react'
import { increment, decrement, incrementAsync } from '../../redux/actions/count_action' //引入action
import { connect } from 'react-redux'

class Count extends Component {
    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = this.props.count
        if (count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(value * 1, 500)
    }

    render() {
        return (
            <div>
                当前求和为：{this.props.count},下方组件的总人数为：{this.props.persons}
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



export default connect(
    state => ({ 
        count: state.count, 
        persons: state.person.length 
    }),

    {
        increment,
        decrement,
        incrementAsync

    }
)(Count)

