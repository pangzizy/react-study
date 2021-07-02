import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodos: PropTypes.func.isRequired
    }

    render() {
        const { todos, updateTodos, deleteTodos } = this.props
        return (
            <div>
                <ul className="todo-main">

                    {
                        todos.map((todo) => {
                            return <Item key={todo.id} {...todo} updateTodos={updateTodos} deleteTodos={deleteTodos} />
                        })
                    }
                </ul>
            </div>
        )
    }
}
