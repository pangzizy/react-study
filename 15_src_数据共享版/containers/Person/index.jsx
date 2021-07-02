import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import {createPersonAction} from '../../redux/actions/person_action'

class Person extends Component {

    addPerson = () => {
        const { value: name } = this.nameValue
        const { value: age } = this.ageValue
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)
    }

    render() {
        return (
            <div>
                <h3>这是Person组件，上方组件求和为：{this.props.countNum}</h3>
                <input type="text" ref={c => this.nameValue = c} placeholder="请输入名字" />
                <input type="text" ref={c => this.ageValue = c} placeholder="请输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <hr />
                <ul>
                    {
                        this.props.personArr.map((personObj)=>{
                            return <li key={personObj.id}>名字：{personObj.name}------年龄：{personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ personArr: state.person,countNum:state.count }),
    {addPerson:createPersonAction}
)(Person)
