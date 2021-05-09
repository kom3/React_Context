import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h2>This is Parent Component</h2>
                <hr /><hr />
                <Link to='childone'>Goto Child one</Link>
                <br /><br />
                <a href="#childtwo">Goto Child two</a>
            </div>
        )
    }
}
