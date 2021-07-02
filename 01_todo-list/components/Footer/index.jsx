import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    // 全选与反选
    handleCheckAll = (event) => {
        this.props.checkAll(event.target.checked)
    }

    // 清除已完成任务
    handleCheckClearAll = () => {
        this.props.clearCheckAll()
    }


    render() {
        const { todos } = this.props;
        const total = todos.length;
        const doneAll = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0)
        }, 0)
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" checked={doneAll === total && total !== 0} onChange={this.handleCheckAll} />
                    </label>
                    <span>
                        <span>已完成{doneAll}</span> / 全部{total}
                    </span>
                    <button className="btn btn-danger" onClick={this.handleCheckClearAll}>清除已完成任务</button>
                </div>
            </div>
        )
    }
}