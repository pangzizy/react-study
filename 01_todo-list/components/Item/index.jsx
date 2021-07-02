import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = { mouse: false }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodos(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        if (window.confirm('确定要删除吗')) {
            this.props.deleteTodos(id)
        }
    }


    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ background: mouse ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={() => { this.handleDelete(id) }}>删除</button>
            </li>
        )
    }
}
