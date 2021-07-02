import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

  state = {
    todos: [
      { id: 1, name: '睡觉', done: true },
      { id: 2, name: '吃饭', done: true },
      { id: 3, name: '打豆豆', done: true },
      { id: 4, name: '逛街', done: false },
    ]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state;
    let newTodoObj = [todoObj, ...todos]
    this.setState({ todos: newTodoObj })
  }

  updateTodos = (id, done) => {
    const { todos } = this.state;

    let newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: done }
      else return todo
    })

    this.setState({ todos: newTodos })
  }

  deleteTodos = (id) => {
    const { todos } = this.state
    let newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    console.log(newTodos)
    this.setState({ todos: newTodos })
  }

  // 全选
  checkAll = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: done }
    })
    this.setState({ todos: newTodos })
  }

  // 清除已完成人去
  clearCheckAll = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={todos} updateTodos={this.updateTodos} deleteTodos={this.deleteTodos} />
            <Footer todos={todos} checkAll={this.checkAll} clearCheckAll={this.clearCheckAll} />
          </div>
        </div>
      </div>
    )
  }
}


