import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'//路由组件 一般放在pages文件夹下，接收到三个固定的属性 history location match
import About from './pages/About'
import Header from './components/Header' //一般组件 一般放在components文件夹下,写组件标签时，传递了什么就能收到什么

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item" to="/home">Home</Link> */}
                            <NavLink activeClassName="active_text" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="active_text" className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
