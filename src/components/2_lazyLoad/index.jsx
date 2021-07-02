import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'
// import Home from './Home'
// import About from './About'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
    render() {
        return (
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                
                <Suspense fallback={<h1>Loading</h1>}>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </Suspense>


            </div>
        )
    }
}
