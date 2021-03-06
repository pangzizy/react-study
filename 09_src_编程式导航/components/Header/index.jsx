import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }

    goForward = ()=>{
        this.props.history.goForward()
    }
    gp = ()=>{
        this.props.history.go(-2)
    }
    render() {
        return (
            <div>
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.back}>ει</button>
                <button onClick={this.goForward}>εθΏ</button>
                <button onClick={this.go}>go</button>
                <hr />
            </div>
        )
    }
}
export default withRouter(Header)
