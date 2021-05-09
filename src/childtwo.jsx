import React, { Component } from 'react'

export default class Childtwo extends Component {
    render() {
        return (
            <div>
                <h2>This is Child two Component</h2>
                <hr /><hr />
                <a href="#childone">Goto to Child one</a>
                <br /><br />
                <a href="#/">Goto parent</a>
            </div>
        )
    }
}
