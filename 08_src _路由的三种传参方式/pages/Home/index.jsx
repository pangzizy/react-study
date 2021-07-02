import React, { Component } from 'react'
import { Route,Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
    render() {
        return (
            <div>
                我是Home的内容
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                </div>
                <Route path="/home/news" component={News} />
                <Route path="/home/message" component={Message} />
                <Redirect to="/home/news" />
            </div>
        )
    }
}
